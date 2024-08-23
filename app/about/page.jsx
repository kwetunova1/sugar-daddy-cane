import Benefits from "@/components/About/Benefits";
import Introduction from "@/components/About/Introduction";
import ContactForm from "@/components/Home/ContactForm";
import Navbar from "@/components/Navbar/Navbar";
import classes from "./page.module.css";

const About = () => {
  return (
    <>
      <div className="bg-[#DEB002]">
        <div className="container mx-auto px-6 sm:px-16">
          <Navbar />
        </div>
      </div>

      <div className={`${classes.juices} min-h-full`}>
        <div className="container mx-auto px-6 sm:px-16">
          <Introduction />
          <Benefits />
        </div>
      </div>
      <div className="bg-[#440E62] py-8">
        <div className="container mx-auto px-6 sm:px-16">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default About;
