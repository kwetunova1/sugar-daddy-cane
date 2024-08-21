import { benefits } from "@/constants";

export default function Benefits() {
  return (
    <div className="my-20">
      <h2 className="text-4xl text-[#DEB002] leading-[52px] font-bold text-center mb-4">Our Sugarcane juice offers you</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="benefits-card bg-white p-6 flex flex-col items-center my-5 gap-4">
            <div className="text-4xl mb-2 bg-[#440E62] p-4 rounded-full text-white">{benefit.icon}</div>
            <h3 className="text-2xl font-semibold">{benefit.title}</h3>
            <p className="text-center text-[#5a5959] text-base leading-8 font-light">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
