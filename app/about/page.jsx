import Introduction from "@/components/About/Introduction";
import ContactForm from "@/components/Home/ContactForm";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
      <div className="bg-[#DEB002]">
        <div className="container mx-auto px-6 sm:px-16">
          <Navbar />
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-16">
        <Introduction />
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
