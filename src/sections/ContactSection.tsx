import memjiContact from "../assets/memji-contact.png";
import { BsSend } from "react-icons/bs";

export default function ContactSection() {
  return (
    <div className="relative lg:col-span-2">
      {/* Background */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-teal-950/10 to-teal-950/90 max-lg:rounded-b-4xl" />

      <div className="relative flex flex-col justify-between h-full overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
        <div className="px-10 pt-4">
          <h3 className="text-sm/4 mt-4 font-semibold text-indigo-400">
            let's have a talk
          </h3>
          <p className="mt-2 text-lg font-medium tracking-tight text-white">
            Available for collaborations, creative teams, or just good
            conversation.
          </p>

          {/* Contact Icons */}
          <div className="flex items-center gap-6 mt-4 text-gray-400 text-xl">
            <a
              href="mailto:ayush@example.com"
              aria-label="Email"
              className="hover:text-indigo-400 transition"
            >
              {/* <FaEnvelope /> */}Main
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-indigo-400 transition"
            >
              {/* <FaGithub /> */}
              Github
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-indigo-400 transition"
            >
              {/* <FaLinkedin /> */}
              Linked In
            </a>
            <a
              href="/contact"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-indigo-400 transition"
            >
              {/* <FaLinkedin /> */}
              Main
            </a>
            <span
              className="flex items-center gap-1 text-gray-500"
              aria-label="Location"
            >
              {/* <FaMapMarkerAlt /> */}
              Location
              <span className="text-sm">Dehradun — Remote-ready</span>
            </span>
          </div>

          {/* Contact Form */}
          {/* <form className="mt-8 flex flex-col gap-4 max-w-md">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="mt-2 flex  justify-center-safe gap-3 transition font-semibold rounded-md px-4 py-2"
            >
              connect
              <BsSend />
            </button>
          </form> */}
        </div>

        {/* Image with shadow bar */}
        <div className="relative mt-6 lg:mt-auto">
          <img
            alt="memji contact"
            src={memjiContact}
            className="h-50 w-fit object-cover"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl" />
    </div>
  );
}
