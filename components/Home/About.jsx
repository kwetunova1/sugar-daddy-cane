import { aboutImage } from "@/public/images";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center gap-6 mt-20">
      <div className="flex-1">
        <Image
          src={aboutImage}
          alt="more about the shop"
          className="w-full h-full object-cover relative"
        />
      </div>

      <div className="flex-1 space-y-6">
        <h2 className="text-4xl text-[#090807] leading-[52px] font-bold">About Us</h2>
        <p className="text-[#5a5959] text-base leading-8 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          facere at suscipit ipsa optio accusamus quod nisi, amet reprehenderit
          quibusdam magnam pariatur rerum beatae saepe voluptates hic illum vero
          in, expedita asperiores autem nesciunt aut magni quos. Tenetur
          distinctio repudiandae dignissimos facere illo dolor laboriosam neque
          tempora? Est, expedita perspiciatis?
        </p>
        <button className="text-base bg-[#ffa30f] text-white py-3.5 w-full max-w-[190px] text-center inline-block transition ease-in duration-500 z-[9999] relative font-light">About More</button>
      </div>
    </div>
  );
}
