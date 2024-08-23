import ContactForm from "@/components/Home/ContactForm";
import Navbar from "@/components/Navbar/Navbar";
import { contact_us } from "@/public/images";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="bg-[#DEB002]">
        <div className="container mx-auto px-6 sm:px-16">
          <Navbar />
        </div>
      </div>

      <div className="my-20">
        <div className="container mx-auto px-6 sm:px-16">
          <div className="flex justify-center items-center flex-col max-w-4xl text-center mx-auto my-20">
            <h2 className="text-4xl text-[#090807] leading-[52px] font-bold mb-4">
              Let's get in touch
            </h2>
            <p className="text-[#5a5959] text-base leading-8 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              eos necessitatibus enim repellendus modi possimus doloribus eaque,
              officiis incidunt molestias.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between">
            <div className="">
              <Image src={contact_us}/>
            </div>

            <div className="bg-[#55236d] p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
