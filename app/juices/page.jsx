import ContactForm from "@/components/Home/ContactForm";
import FullJuices from "@/components/Juices/FullJuices";
import Navbar from "@/components/Navbar";


const Juices = () => {
    return (
      <>
      <div className="bg-[#DEB002]">
        <div className="container mx-auto px-6 sm:px-16">
          <Navbar />
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-16 my-20">
        <FullJuices />
      </div>

      <div className="bg-[#440E62] py-8">
        <div className="container mx-auto px-6 sm:px-16">
          <ContactForm />
        </div>
      </div>
      </>
    );
  };
  
  export default Juices;
  