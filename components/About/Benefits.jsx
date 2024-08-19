import { benefits } from "@/constants";

export default function Benefits() {
  return (
    <div className="my-20">
      <h2 className="text-4xl text-[#DEB002] leading-[52px] font-bold text-center">Our Sugarcane juice offers you</h2>
      <div className="flex gap-6">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="flex flex-col items-center my-5">
            <div className="text-4xl mb-2 bg-[#440E62] p-4 rounded-full text-white">{benefit.icon}</div>
            <h3 className="text-2xl font-semibold">{benefit.title}</h3>
            <p className="text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
