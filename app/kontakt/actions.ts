"use server";

// Wysyłka formularza zapytania: walidacja (zod), Cloudflare Turnstile, mail przez Resend.
// Zmienne środowiskowe: RESEND_API_KEY, TURNSTILE_SECRET_KEY, opcjonalnie CONTACT_FROM i CONTACT_TO.

import { Resend } from "resend";
import { z } from "zod";
import { BUDGETS, MAIL, PROJECT_TYPES } from "@/lib/site";

const PROJECT_VALUES = PROJECT_TYPES.map((p) => p.value) as [string, ...string[]];
const BUDGET_VALUES = BUDGETS.map((b) => b.value) as [string, ...string[]];

const schema = z.object({
  imie: z
    .string()
    .trim()
    .min(1, "Wpisz imię, żebym wiedział, jak się do Ciebie zwracać.")
    .max(100, "Imię może mieć najwyżej 100 znaków."),
  email: z
    .string()
    .trim()
    .pipe(z.email("Wpisz adres e-mail w formacie nazwa@firma.pl.")),
  rodzaj: z.enum(PROJECT_VALUES, "Wybierz rodzaj projektu z listy."),
  telefon: z.string().trim().max(30, "Numer może mieć najwyżej 30 znaków."),
  budzet: z.enum(BUDGET_VALUES).optional(),
  wiadomosc: z
    .string()
    .trim()
    .min(1, "Napisz w kilku zdaniach, czego potrzebujesz.")
    .max(5000, "Wiadomość może mieć najwyżej 5000 znaków."),
  zgoda: z.literal(true, "Zaznacz zgodę, żebym mógł odpisać na zapytanie."),
  marketing: z.boolean(),
});

export type ContactField = keyof z.infer<typeof schema>;

export type ContactState = {
  status: "idle" | "error" | "sent";
  errors?: Partial<Record<ContactField, string>>;
  message?: string;
  /** wpisane wartości wracają do pól po błędzie (React czyści formularz po akcji) */
  values?: Record<string, string>;
};

const str = (fd: FormData, k: string) => {
  const v = fd.get(k);
  return typeof v === "string" ? v : "";
};

async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return process.env.NODE_ENV !== "production";
  if (!token) return false;
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({ secret, response: token }),
    },
  );
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

export async function sendInquiry(
  _prev: ContactState,
  fd: FormData,
): Promise<ContactState> {
  const values = {
    imie: str(fd, "imie"),
    email: str(fd, "email"),
    rodzaj: str(fd, "rodzaj"),
    telefon: str(fd, "telefon"),
    budzet: str(fd, "budzet"),
    wiadomosc: str(fd, "wiadomosc"),
    zgoda: fd.get("zgoda") === "on" ? "on" : "",
    marketing: fd.get("marketing") === "on" ? "on" : "",
  };

  const parsed = schema.safeParse({
    ...values,
    budzet: values.budzet || undefined,
    zgoda: values.zgoda === "on",
    marketing: values.marketing === "on",
  });

  if (!parsed.success) {
    const errors: ContactState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactField;
      errors[key] ??= issue.message;
    }
    return { status: "error", errors, values };
  }

  if (!(await verifyTurnstile(str(fd, "cf-turnstile-response")))) {
    return {
      status: "error",
      message: "Nie udało się potwierdzić, że nie jesteś botem. Odśwież stronę i spróbuj jeszcze raz.",
      values,
    };
  }

  const d = parsed.data;
  const label = <T extends { value: string; label: string }>(
    list: readonly T[],
    v?: string,
  ) => list.find((i) => i.value === v)?.label ?? "—";

  const text = [
    `Imię: ${d.imie}`,
    `E-mail: ${d.email}`,
    `Telefon: ${d.telefon || "—"}`,
    `Rodzaj projektu: ${label(PROJECT_TYPES, d.rodzaj)}`,
    `Budżet: ${label(BUDGETS, d.budzet)}`,
    `Zgoda marketingowa: ${d.marketing ? "tak" : "nie"}`,
    "",
    d.wiadomosc,
  ].join("\n");

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    if (process.env.NODE_ENV === "production") {
      console.error("[kontakt] brak RESEND_API_KEY");
      return {
        status: "error",
        message: `Nie udało się wysłać zapytania. Napisz bezpośrednio na ${MAIL}.`,
        values,
      };
    }
    // w dev bez klucza tylko logujemy, żeby dało się przetestować formularz
    console.info("[kontakt] (dev, bez wysyłki)\n" + text);
    return { status: "sent" };
  }

  const { error } = await new Resend(key).emails.send({
    from: process.env.CONTACT_FROM ?? "Lunaris web <formularz@lunarisweb.pl>",
    to: process.env.CONTACT_TO ?? MAIL,
    replyTo: d.email,
    subject: `Zapytanie: ${label(PROJECT_TYPES, d.rodzaj)} — ${d.imie}`,
    text,
  });

  if (error) {
    console.error("[kontakt] Resend:", error);
    return {
      status: "error",
      message: `Nie udało się wysłać zapytania. Spróbuj za chwilę albo napisz na ${MAIL}.`,
      values,
    };
  }

  return { status: "sent" };
}
