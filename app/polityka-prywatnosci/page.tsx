import type { Metadata } from "next";
import { Container, Typography } from "@/components/ui";
import { COMPANY, MAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polityka prywatności — Lunaris web",
  alternates: { canonical: "/polityka-prywatnosci" },
};

// TODO: szkic do weryfikacji. Uzupełnić dane firmy w lib/site.ts, dostawcę hostingu
// i okresy przechowywania danych; przed publikacją sprawdzić treść z prawnikiem.
const SECTIONS = [
  {
    title: "Administrator danych",
    body: `Administratorem danych osobowych jest ${COMPANY.name}, ${COMPANY.address}, NIP ${COMPANY.nip}. W sprawach danych osobowych napisz na ${MAIL}.`,
  },
  {
    title: "Formularz kontaktowy",
    body: "Dane z formularza (imię, adres e-mail, telefon, treść wiadomości) przetwarzam, żeby odpowiedzieć na zapytanie i przygotować ofertę (art. 6 ust. 1 lit. b i f RODO). Wiadomość trafia do mnie przez usługę wysyłki e-maili Resend. Formularz chroni przed spamem Cloudflare Turnstile.",
  },
  {
    title: "Statystyki i pliki cookies",
    body: "Ruch na stronie mierzę narzędziem Plausible, które nie używa plików cookies i nie zbiera danych pozwalających zidentyfikować osobę. Strona nie stosuje cookies marketingowych.",
  },
  {
    title: "Odbiorcy danych",
    body: "Dane mogą trafić do dostawców usług, z których korzysta strona: hostingu, poczty e-mail (Resend), ochrony przed spamem (Cloudflare) i księgowości, wyłącznie w zakresie potrzebnym do ich działania.",
  },
  {
    title: "Twoje prawa",
    body: "Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przeniesienia i wniesienia sprzeciwu, a także skargi do Prezesa Urzędu Ochrony Danych Osobowych.",
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <main id="tresc">
      <Container size="base" className="flex flex-col gap-12 pt-(--nav-h)">
        <Typography variant="h1">Polityka prywatności</Typography>
        <div className="flex max-w-[64ch] flex-col gap-10">
          {SECTIONS.map((s) => (
            <section key={s.title} className="flex flex-col gap-3">
              <Typography variant="h3" as="h2">
                {s.title}
              </Typography>
              <Typography variant="body" tone="muted">
                {s.body}
              </Typography>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
