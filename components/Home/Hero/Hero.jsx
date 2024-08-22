import HeroHelper from "./HeroHelper";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-12">
      <div className=" w-full md:w-1/2 flex flex-col items-center md:items-start mb-6 md:mb-0">
        <h1 className="text-white text-6xl leading-[78px] font-bold tracking-wider">
          Sugar cane <br />
          juice <span className="text-[#55236d]">Vendor</span>
        </h1>
        <p className="mt-6 text-base text-white leading-7 font-medium pb-12 block">
          Experience the pure delight of our freshly pressed sugarcane juice. 🌿
          Packed with natural goodness, it’s a healthy and refreshing choice for
          any time of the day. Quench your thirst with the ultimate blend of
          taste and wellness!
        </p>
        <button className="text-lg uppercase bg-[#758824] text-white py-3.5 w-full max-w-[190px] text-center inline-block transition ease-in duration-500 z-[9999] relative font-light">
          Read more
        </button>
      </div>

      <div className="w-full md:w-1/2">
        <HeroHelper />
      </div>
    </div>
  );
}
