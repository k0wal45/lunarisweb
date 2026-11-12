import Image from "next/image";
import { Container, TextLink, Typography } from "@/components/ui";
import { ABOUT_HOME } from "@/lib/home";
import portrait from "@/public/img/daniel-kowalski.jpg";

const AboutHomePage = () => {
  return (
    <Container
      size="base"
      className="gap-12 md:gap-24 flex flex-col md:flex-row items-center"
    >
      <Image
        src={portrait}
        alt="Daniel Kowalski"
        placeholder="blur"
        // Image is w-full up to max-w-125 (500px)
        sizes="(min-width: 540px) 500px, 100vw"
        className="w-full h-auto max-w-125 object-cover"
      />
      <div className="flex flex-col gap-8 max-w-2xl">
        <Typography variant="h2">
          {ABOUT_HOME.title}
        </Typography>
        <Typography variant="body" className="lg:max-w-2/3">
          {ABOUT_HOME.text}
        </Typography>
        <Typography variant="ui" tone="muted" className="lg:max-w-2/3">
          {ABOUT_HOME.more}
        </Typography>

        <dl className="flex flex-col w-full">
          {ABOUT_HOME.facts.map(({ label, value }, i) => (
            <div
              key={i}
              className="border-y border-edge flex flex-col sm:flex-row justify-between p-4"
            >
              <Typography as="dt" variant="body" tone="muted">
                {label}
              </Typography>
              <Typography as="dd" variant="body">
                {value}
              </Typography>
            </div>
          ))}
        </dl>
        <TextLink
          href={ABOUT_HOME.link.href}
          weight="strong"
          target="touch"
          className="text-ui"
        >
          {ABOUT_HOME.link.label}
        </TextLink>
      </div>
    </Container>
  );
};

export default AboutHomePage;
