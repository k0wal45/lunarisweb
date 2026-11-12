// Polityka prywatności. Treść (i warunkowe sekcje GA / Plausible) w lib/prywatnosc.ts.

import CookieSettingsButton from "@/components/Consent/CookieSettingsButton";
import DataTable from "@/components/DataTable";
import PageHead from "@/components/PageHead";
import { buttonVariants, Container, Typography } from "@/components/ui";
import { PRIVACY_PAGE } from "@/lib/prywatnosc";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ ...PRIVACY_PAGE.meta, path: "/polityka-prywatnosci" });

const Text = ({ children }: { children: string }) => (
  <Typography variant="body" tone="muted" className="max-w-[64ch]">
    {children}
  </Typography>
);

export default function PrivacyPolicyPage() {
  return (
    <main id="tresc">
      <PageHead
        id="polityka-title"
        title={PRIVACY_PAGE.title}
        lead={PRIVACY_PAGE.lead}
        leadClassName="max-w-[52ch]"
      />
      <Container size="base" className="flex flex-col gap-16 py-20 md:py-24">
        {PRIVACY_PAGE.sections.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            aria-labelledby={`${s.id}-title`}
            className="flex scroll-mt-(--nav-h) flex-col gap-4"
          >
            <Typography variant="h3" as="h2" id={`${s.id}-title`}>
              {`${i + 1}. ${s.title}`}
            </Typography>
            {"body" in s && s.body?.map((t) => <Text key={t}>{t}</Text>)}
            {"list" in s && s.list && (
              <ul className="flex max-w-[64ch] list-disc flex-col gap-1.5 pl-5 text-body text-ash marker:text-ash">
                {s.list.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
            {"table" in s && s.table && (
              <DataTable
                columns={s.table.columns}
                rows={s.table.rows}
                minWidthClassName="min-w-[44rem]"
                className="mt-2"
              />
            )}
            {"after" in s && s.after?.map((t) => <Text key={t}>{t}</Text>)}
            {"settings" in s && s.settings && (
              <CookieSettingsButton
                className={buttonVariants({ variant: "secondary", size: "sm", className: "mt-2" })}
              />
            )}
          </section>
        ))}
      </Container>
    </main>
  );
}
