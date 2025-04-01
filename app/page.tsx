import Blog from "@/components/Blog";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ContactForm from "@/components/Contact";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <Services />
      <AboutUs />
      <Process />
      <Blog />
      <ContactForm />
    </>
  );
}
