const projects = [
  {
    title: "Residential Wiring",
    image: "https://picsum.photos/600/400?random=1",
    description: "Complete wiring installation for a residential building.",
  },
  {
    title: "Solar Installation",
    image: "https://picsum.photos/600/400?random=2",
    description: "Solar inverter and battery system installation.",
  },
  {
    title: "Distribution Board Setup",
    image: "https://picsum.photos/600/400?random=3",
    description: "Professional electrical panel installation.",
  },
  {
    title: "Industrial Control Panel",
    image: "https://picsum.photos/600/400?random=4",
    description: "Factory electrical control panel project.",
  },
  {
    title: "Generator Installation",
    image: "https://picsum.photos/600/400?random=5",
    description: "Commercial generator installation and testing.",
  },
  {
    title: "Street Lighting",
    image: "https://picsum.photos/600/400?random=6",
    description: "Street lighting and outdoor electrical works.",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          Our Projects
        </h1>

        <p className="text-center text-gray-600 mb-12">
          A selection of our completed electrical engineering projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition
                duration-300
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-64
                  object-cover
                "
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-600">
                  {project.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}