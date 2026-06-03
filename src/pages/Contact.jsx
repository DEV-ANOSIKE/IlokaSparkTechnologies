import { WHATSAPP_NUMBER } from "../config/contact";


export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="mb-4">
          Phone: +2347064485955
        </p>

        <p className="mb-4">
          Email: ilokasparktechnologies@gmail.com
        </p>

        <p className="mb-6">
          Location: Lagos, Nigeria
        </p>

        <a
          href="https://wa.me/2347064485955?text=Hello%20IlokaSpark%20Technologies,%20I%20need%20your%20electrical%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-8 py-4 rounded-lg inline-block mt-6"
        >
          Chat on WhatsApp
        </a>

      </div>
    </section>
  );
}