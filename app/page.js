import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import OurJuices from "@/components/Home/OurJuices";
import Navbar from "@/components/Navbar";
import classes from "./page.module.css";
import ContactForm from "@/components/Home/ContactForm";

export default function Home() {
  return (
    <>
      <div className={classes.banner_main}>
        <div className="container mx-auto px-6 sm:px-16">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="container mx-auto px-6 sm:px-16 mt-56">
        <About />
      </div>
      <div className={classes.juices}>
        <div className="container mx-auto px-6 sm:px-16 mt-56">
          <OurJuices />
        </div>
      </div>

      <div className={classes.contact}>
        <div className="container mx-auto px-6 sm:px-16">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
