import ContactForm from "@/components/Home/ContactForm";
import Navbar from "@/components/Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <div className="bg-[#DEB002]">
        <div className="container mx-auto px-6 sm:px-16">
          <Navbar />
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

export default Contact;
