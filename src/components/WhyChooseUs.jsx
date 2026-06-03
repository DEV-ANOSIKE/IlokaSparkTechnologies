import { FaShieldAlt, FaClock, FaAward, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt size={40} />,
      title: "Safe Installations",
      description: "All electrical work follows professional safety standards.",
    },
    {
      icon: <FaClock size={40} />,
      title: "Fast Response",
      description: "Quick support and timely project completion.",
    },
    {
      icon: <FaAward size={40} />,
      title: "Quality Work",
      description: "Reliable workmanship with attention to detail.",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "Customer Support",
      description: "Friendly support before, during and after projects.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Professional service backed by experience and reliability.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="text-blue-600 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}