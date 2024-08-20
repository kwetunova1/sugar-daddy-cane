import { testimonials } from "@/constants";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export default function Testimonials() {
  return (
    <>
      <div className="flex justify-center items-center flex-col max-w-4xl text-center mx-auto my-20">
        <h2 className="text-4xl text-[#090807] leading-[52px] font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-[#5a5959] text-base leading-8 font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eos
          necessitatibus enim repellendus modi possimus doloribus eaque,
          officiis incidunt molestias.
        </p>
      </div>

      {/* testimonials */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-20 grid-cols-1 lg:gap-4 mt-12">
        {testimonials.map((testimony) => (
          <div
            key={testimony.id}
            className="relative flex flex-col items-center p-4 space-y-6 bg-gray-100 rounded-2xl"
          >
            <Image
              src={testimony.img}
              alt="testimony"
              className="absolute top-[-30%] w-[100px] h-[100px] rounded-full border border-b-2"
            />
            <p className="text-center">{testimony.content}</p>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="flex">
                <FaStar style={{ color: "#DEB002" }} />
                <FaStar style={{ color: "#DEB002" }} />
                <FaStar style={{ color: "#DEB002" }} />
                <FaStar style={{ color: "#DEB002" }} />
                <FaStar style={{ color: "#DEB002" }} />
              </div>
              <div className="text-center">
                <p className="font-bold">{testimony.name}</p>
                <p>{testimony.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
