import { motion } from "framer-motion";
import Stats from "../components/Stats";
import ServicesPreview from "../components/ServicesPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <section
  className="min-h-screen flex items-center text-white bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.8)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276')"
  }}
>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Reliable Electrical Engineering Solutions
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Residential, Commercial and Industrial Electrical
              Installations, Solar Energy Systems, Maintenance,
              Repairs and Troubleshooting.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition"
              >
                Our Services
              </a>

              <a
                href="https://wa.me/2347064485955"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg transition"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}