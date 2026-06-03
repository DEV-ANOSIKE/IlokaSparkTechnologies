import { FaBolt, FaSolarPanel, FaTools } from "react-icons/fa";

export default function ServicesPreview() {
  const services = [
    {
      icon: <FaBolt size={40} />,
      title: "Electrical Installation",
      description: "Residential and commercial electrical installations."
    },
    {
      icon: <FaSolarPanel size={40} />,
      title: "Solar Solutions",
      description: "Solar panel, inverter and battery installations."
    },
    {
      icon: <FaTools size={40} />,
      title: "Maintenance & Repairs",
      description: "Electrical troubleshooting and maintenance services."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          What We Do
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Professional electrical engineering services you can trust.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}