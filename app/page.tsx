import AboutHomePage from "@/components/About/AboutHomePage";
import Hero from "@/components/Hero/Hero";
import Process from "@/components/Process/Process";
import Results from "@/components/Results/Results";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats";
import { pageMeta, SITE_DEFAULT } from "@/lib/seo";

export const metadata = pageMeta({
  title: SITE_DEFAULT.title,
  absolute: true,
  description: SITE_DEFAULT.description,
  path: "/",
});

export default function Home() {
  return (
    <main id="tresc">
      <Hero />
      <Stats />
      <Results />
      <Services />
      <Process />
      <AboutHomePage />
    </main>
  );
}
