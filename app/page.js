import AboutSection from "./components/homepage/about";
// import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import RecruiterFocus from "./components/homepage/recruiter-focus";
import Skills from "./components/homepage/skills";
import FloatingSectionNav from './components/floating-section-nav';

export default async function Home({ searchParams }) {
  const audience = searchParams?.audience === 'client' ? 'client' : 'recruiter';
  return (
    <>
      <FloatingSectionNav audience={audience} />
      <HeroSection audience={audience} />
      <RecruiterFocus audience={audience} />
      <AboutSection />
      <Experience />
      <Skills audience={audience} />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection audience={audience} />
    </>
  )
};
