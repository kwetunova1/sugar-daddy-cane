import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function ContactForm() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl text-white leading-[52px] font-bold text-center">
          Contact Us
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <form action="" className="w-full">
          <div className="">
            <input
              type="text"
              placeholder="Full Name"
              className="px-2.5 py-0 mb-5 w-full h-[45px] bg-transparent text-white text-lg font-normal border-b border-white"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className="px-2.5 py-0 mb-5 w-full h-[45px] bg-transparent text-white text-lg font-normal border-b border-white"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="px-2.5 py-0 mb-5 w-full h-[45px] bg-transparent text-white text-lg font-normal border-b border-white"
              />
            </div>

            <div className="flex gap-4 text-white mb-6 md:mb-0">
              <p>Follow Me</p>
              <FaFacebook className="text-2xl cursor-pointer" />
              <FaInstagram className="text-2xl cursor-pointer" />
              <FaTwitter className="text-2xl cursor-pointer" />
              <FaLinkedin className="text-2xl cursor-pointer" />
            </div>
          </div>

          <div className="">
            <textarea
              type="text"
              placeholder="Message"
              className="px-2.5 py-0 mb-5 w-full h-[45px] bg-transparent text-white text-lg font-normal border-b border-white"
            ></textarea>
          </div>

          <div className="flex justify-between flex-col md:flex-row items-center text-white">
          <ul className="flex flex-col md:flex-row gap-4 mb-6 md:mb-0">
            <li className="flex items-center gap-2">
              <IoLocationSharp />
              <p>Juja Kiambu</p>
            </li>

            <li className="flex items-center gap-2">
              <FaPhoneVolume />
              <p>25471234567</p>
            </li>

            <li className="flex items-center gap-2">
              <CiMail />
              <p>sugardaddycane@gmail.com</p>
            </li>
          </ul>

          <button className="text-base transition ease-in duration-500 bg-[#ee3112] text-white py-2.5 px-6 font-medium block mt-7.5 float-right rounded-full uppercase z-[9999] relative">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
