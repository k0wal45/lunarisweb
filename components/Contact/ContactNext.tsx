// „Co będzie dalej”: trzy kroki po wysłaniu zapytania, z dużymi cyframi.

import StepGrid from "@/components/StepGrid";
import { Container, Typography } from "@/components/ui";
import { CONTACT_NEXT } from "@/lib/kontakt";

export default function ContactNext() {
  return (
    <Container as="section" size="base" aria-labelledby="dalej-title" className="md:pt-48">
      <Typography id="dalej-title" variant="h2" className="mb-12">
        {CONTACT_NEXT.title}
      </Typography>
      <StepGrid items={CONTACT_NEXT.steps} columns={3} />
    </Container>
  );
}
