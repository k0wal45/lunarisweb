"use client";

// Formularz zapytania (design.md, sekcja 12: formularze). Walidacja po stronie serwera
// (app/kontakt/actions.ts), błąd pod polem z instrukcją naprawy, po błędzie fokus na pierwsze złe pole.

import { Turnstile } from "@marsidev/react-turnstile";
import { useActionState, useEffect, useRef, type ReactNode } from "react";
import {
  sendInquiry,
  type ContactField,
  type ContactState,
} from "@/app/kontakt/actions";
import { Button, TextLink, Typography } from "@/components/ui";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { BUDGETS, PROJECT_TYPES, REPLY_TIME } from "@/lib/site";
import { sierotki } from "@/lib/sierotki";

const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const ORDER: ContactField[] = ["imie", "email", "rodzaj", "wiadomosc", "zgoda"];

const LABEL = "text-small font-medium text-moon";
const OPT = "font-normal text-ash";
const FIELD =
  "w-full appearance-none rounded-none border border-ash bg-mare px-4 text-body leading-[1.4] text-moon aria-invalid:border-error";

function Err({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <span id={id} className="text-small font-medium text-error">
      {children}
    </span>
  );
}

function Field({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
}

/** atrybuty pola z błędem: aria-invalid + powiązanie z komunikatem */
const invalid = (state: ContactState, k: ContactField) =>
  state.errors?.[k]
    ? { "aria-invalid": true as const, "aria-describedby": `e-${k}` }
    : {};

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(
    sendInquiry,
    { status: "idle" },
  );
  const formRef = useRef<HTMLFormElement>(null);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  // rodzaj projektu i budżet z ostatniej wysyłki: po sukcesie serwer nie odsyła wartości
  const sentRef = useRef<{ project_type?: string; budget?: string }>({});
  useEffect(() => {
    if (state.status === "sent") track("generate_lead", { form_name: "kontakt", ...sentRef.current });
  }, [state.status]);

  useEffect(() => {
    if (state.status !== "error") return;
    const first = ORDER.find((k) => state.errors?.[k]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }, [state]);

  if (state.status === "sent") {
    return (
      <div role="status" className="flex items-center gap-6 bg-mare p-8 md:p-12">
        <svg width="56" height="56" viewBox="0 0 100 100" aria-hidden="true" className="shrink-0">
          <circle cx="50" cy="50" r="48" className="fill-moon" />
        </svg>
        <div>
          <p className="font-display text-[2.25rem] leading-[1.1]">Zapytanie wysłane.</p>
          <Typography tone="muted" className="mt-2">
            {`Odpiszę w ciągu ${REPLY_TIME}.`}
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={action}
      onSubmit={(ev) => {
        const fd = new FormData(ev.currentTarget);
        sentRef.current = {
          project_type: String(fd.get("rodzaj") || "") || undefined,
          budget: String(fd.get("budzet") || "") || undefined,
        };
      }}
      noValidate
      aria-label="Formularz zapytania"
      className="grid grid-cols-1 gap-x-(--gutter) gap-y-8 sm:grid-cols-2"
    >
      <Field>
        <label htmlFor="f-imie" className={LABEL}>
          Imię
        </label>
        <input
          id="f-imie"
          name="imie"
          autoComplete="given-name"
          defaultValue={v.imie}
          className={cn(FIELD, "h-13")}
          {...invalid(state, "imie")}
        />
        <Err id="e-imie">{e.imie}</Err>
      </Field>

      <Field>
        <label htmlFor="f-email" className={LABEL}>
          E-mail
        </label>
        <input
          id="f-email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={v.email}
          className={cn(FIELD, "h-13")}
          {...invalid(state, "email")}
        />
        <Err id="e-email">{e.email}</Err>
      </Field>

      <Field>
        <label htmlFor="f-rodzaj" className={LABEL}>
          Rodzaj projektu
        </label>
        <div className="relative">
          <select
            id="f-rodzaj"
            name="rodzaj"
            defaultValue={v.rodzaj ?? ""}
            className={cn(FIELD, "h-13 cursor-pointer pr-11")}
            {...invalid(state, "rodzaj")}
          >
            <option value="">Wybierz z listy</option>
            {PROJECT_TYPES.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-ash"
          >
            <path
              d="M2.5 4.5 6 8l3.5-3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <Err id="e-rodzaj">{e.rodzaj}</Err>
      </Field>

      <Field>
        <label htmlFor="f-tel" className={LABEL}>
          Telefon <span className={OPT}>(opcjonalnie)</span>
        </label>
        <input
          id="f-tel"
          name="telefon"
          type="tel"
          autoComplete="tel"
          defaultValue={v.telefon}
          className={cn(FIELD, "h-13")}
          {...invalid(state, "telefon")}
        />
        <Err id="e-telefon">{e.telefon}</Err>
      </Field>

      <fieldset className="flex flex-col gap-2 sm:col-span-2">
        <legend className={cn(LABEL, "mb-2")}>
          Budżet <span className={OPT}>(opcjonalnie, netto)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {BUDGETS.map((b) => (
            <label key={b.value} className="relative">
              <input
                type="radio"
                name="budzet"
                value={b.value}
                defaultChecked={v.budzet === b.value}
                className="peer sr-only"
              />
              <span className="inline-flex h-11 cursor-pointer items-center rounded-disc border border-ash px-[18px] text-ui tabular-nums transition-colors duration-(--dur-micro) ease-terminator hover:border-moon peer-checked:border-moon peer-checked:bg-moon peer-checked:text-night peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-moon">
                {sierotki(b.label)}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field className="sm:col-span-2">
        <label htmlFor="f-wiad" className={LABEL}>
          Wiadomość
        </label>
        <textarea
          id="f-wiad"
          name="wiadomosc"
          defaultValue={v.wiadomosc}
          className={cn(FIELD, "min-h-40 resize-y py-3.5")}
          {...invalid(state, "wiadomosc")}
        />
        <Err id="e-wiadomosc">{e.wiadomosc}</Err>
      </Field>

      <div className="flex flex-col gap-1 sm:col-span-2">
        <label className="flex min-h-11 cursor-pointer items-start gap-3 text-ui">
          <input
            type="checkbox"
            name="zgoda"
            defaultChecked={v.zgoda === "on"}
            className="mt-px size-5.5 shrink-0 accent-moon"
            {...invalid(state, "zgoda")}
          />
          <span>
            {sierotki("Zgadzam się na kontakt w sprawie tego zapytania. Szczegóły w ")}
            <TextLink href="/polityka-prywatnosci">polityce prywatności</TextLink>.
          </span>
        </label>
        <span className="pl-8.5">
          <Err id="e-zgoda">{e.zgoda}</Err>
        </span>
        <label className="flex min-h-11 cursor-pointer items-start gap-3 text-ui text-ash">
          <input
            type="checkbox"
            name="marketing"
            defaultChecked={v.marketing === "on"}
            className="mt-px size-5.5 shrink-0 accent-moon"
          />
          <span>
            {sierotki("Chcę czasem dostać maila z nowym tekstem z działu Wiedza.")}{" "}
            <span className="font-normal">(opcjonalnie)</span>
          </span>
        </label>
      </div>

      {TURNSTILE_KEY && (
        <div className="sm:col-span-2">
          <Turnstile
            siteKey={TURNSTILE_KEY}
            options={{ theme: "dark", language: "pl" }}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 sm:col-span-2">
        {state.message && (
          <p role="alert" className="text-small font-medium text-error">
            {state.message}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-6">
          <Button type="submit" disabled={pending}>
            {pending ? "Wysyłam…" : "Wyślij zapytanie"}
          </Button>
          <Typography variant="small" tone="muted" className="font-normal">
            {`Odpiszę w ciągu ${REPLY_TIME}.`}
          </Typography>
        </div>
      </div>
    </form>
  );
}
