export default function Testimonials() {
  const testimonials = [
    {
      name: "John D.",
      text: "Excellent electrical installation service. Highly recommended.",
    },
    {
      name: "Sarah K.",
      text: "Professional and reliable team. Great experience.",
    },
    {
      name: "Michael A.",
      text: "Completed our project on time and within budget.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 mb-6">
                "{testimonial.text}"
              </p>

              <h4 className="font-bold">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}