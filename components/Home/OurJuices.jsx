import { juices } from "@/constants";
import Image from "next/image";

export default function OurJuices() {
  return (
    <>
      <div className="flex justify-center items-center flex-col max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl text-[#090807] leading-[52px] font-bold">
          Our Juices
        </h2>
        <p className="text-[#5a5959] text-base leading-8 font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eos
          necessitatibus enim repellendus modi possimus doloribus eaque,
          officiis incidunt molestias.
        </p>
      </div>

      <div className="">
        <div className="container mx-auto sm:px-16 px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8 lg:gap-4">
            {juices.map((juice) => (
              <div
                key={juice.id}
                className="flex flex-col items-center rounded-3xl"
              >
                <Image
                  src={juice.img}
                  alt="juice"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: "24px",
                    borderTopRightRadius: "24px",
                    boxShadow: "8px 0px 29px rgba(22, 22, 23, 0.17)",
                  }}
                />

                <div className="p-4 space-y-3">
                  <h5 className="text-[#1C1C1C] text-lg md:text-xl font-semibold text-center">
                    {juice.title}
                  </h5>
                  <p className="text-center">{juice.description}</p>
                  <p className="text-center text-[#ffa30f] font-extrabold text-2xl">
                    Ksh {juice.price}
                  </p>
                </div>
                <button className="mb-8 text-base bg-[#ffa30f] text-white py-3.5 w-full max-w-[190px] text-center inline-block transition ease-in duration-500 z-[9999] font-light">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
