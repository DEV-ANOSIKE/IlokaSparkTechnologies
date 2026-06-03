import {
  FaBolt,
  FaSolarPanel,
  FaTools,
  FaIndustry,
  FaPlug,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    title: "Electrical Installation",
    description: "Complete residential and commercial electrical installations.",
    icon: <FaBolt size={40} />,
  },
  {
    title: "Solar Installation",
    description: "Professional solar power system installation and maintenance.",
    icon: <FaSolarPanel size={40} />,
  },
  {
    title: "Generator Maintenance",
    description: "Generator servicing, repairs, and maintenance.",
    icon: <FaTools size={40} />,
  },
  {
    title: "Industrial Wiring",
    description: "Reliable industrial electrical solutions and control systems.",
    icon: <FaIndustry size={40} />,
  },
  {
    title: "Panel Installation",
    description: "Distribution boards and electrical panel installations.",
    icon: <FaPlug size={40} />,
  },
  {
    title: "Troubleshooting",
    description: "Fault diagnosis and electrical repairs.",
    icon: <FaLightbulb size={40} />,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          Our Services
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Delivering safe, reliable and professional electrical solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white
                p-8
                rounded-xl
                shadow-md
                hover:shadow-2xl
                transition
                duration-300
              "
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {service.title}
              </h2>

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