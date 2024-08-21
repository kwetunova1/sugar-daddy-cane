import { juiceCarousel1 } from "@/public/images";
import Image from "next/image";
import React from "react";

export default function Introduction() {
  return (
    <div className="flex flex-col md:flex-row my-20">
      <div className="flex-1">
        <Image src={juiceCarousel1}/>
      </div>

      <div className="flex-1 flex flex-col items-center md:items-start mt-6 md:mt-0">
        <h5 className="text-xl text-[#440E62] font-semibold">About Us</h5>
        <h2 className="text-4xl text-[#DEB002] leading-[52px] font-bold">Who We are</h2>
        <p className="text-[#5a5959] text-base leading-8 font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          obcaecati corrupti corporis quidem dolorem doloribus facere quae
          dolores! Nulla quos id voluptatum at accusamus quo, eveniet distinctio
          amet dolorum. Debitis aperiam dolores numquam reprehenderit eveniet, a
          necessitatibus enim provident cumque atque incidunt doloribus impedit
          quasi sit voluptas et recusandae quibusdam maxime deserunt voluptatem.
          Expedita ratione iusto vero minus, assumenda ea iure voluptas qui
          soluta architecto quibusdam provident saepe, fugiat distinctio.
        </p>
      </div>
    </div>
  );
}
