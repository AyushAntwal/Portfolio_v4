import Avatar from "./sections/Avatar";
import Footer from "./sections/Footer";
import bgImage from "./assets/gradient-bg.png";
import frame1 from "./assets/Frame_4.png";
import Experiences from "./sections/Experiences";

import TechStackOrbit from "./sections/TechStackOrbit";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-400">
          Innovation That Delivers Value
        </h2>
        <div className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
          <p>Simple ideas.</p> <p>Purpose-driven execution.</p>{" "}
          <p>Refined results.</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-4 lg:grid-cols-6">
          <div className="relative lg:col-span-4 ">
            <div className="absolute inset-0 rounded-lg max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              {/* Spinning background */}
              <img
                alt=""
                src={bgImage}
                className="absolute top-1/2 left-1/2 scale-150 -translate-z-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow pointer-events-none object-cover z-0"
              />

              {/* Foreground content */}
              <div className="relative z-10 p-12">
                <Avatar />
                {/* <h2 className="text-base/7 font-semibold text-indigo-400">
                  I build frontend that feel as good as they look.
                </h2> */}
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  Crafting modern interfaces with clarity, precision, and
                  intent.
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  A frontend developer with a focus on clean UI and scalable
                  systems. I build responsive, accessible, and lightweight
                  interfaces — combining technical precision with design
                  sensitivity. Less noise. More clarity.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </div>
          <div className="relative lg:col-span-2 ">
            <div className="absolute inset-0 rounded-lg bg-radial-animate lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              {/* <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-releases.png"
                className=" aspect-square h-40 object-cover object-left lg:object-right"
              /> */}

              <div className="p-10 pt-4">
                <h3 className="text-sm/4 mt-4 font-semibold text-indigo-400">
                  Last updated
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  Modern frameworks & immersive animations
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  Diving deep into Angular and Next.js for scalable,
                  high-performance web apps, while mastering Framer Motion and
                  Three.js to craft smooth, expressive animations and
                  captivating 3D experiences.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 lg:rounded-tr-4xl" />
          </div>

          <div className="relative lg:col-span-4">
            <div className="absolute inset-0 rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              {/* <img
                alt=""
                src={frame1}
                className="w-10/12 m-auto mt-2 object-cover"
              /> */}
              <TechStackOrbit />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-400">
                  Toolkit
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  Designed for speed. Chosen for stability
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  Each tool in my stack is selected to balance performance,
                  flexibility, and developer experience.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15" />
          </div>
          <div className="relative lg:col-span-2 lg:row-span-2">
            <div className="absolute inset-0 rounded-lg bg-gray-800 max-lg:rounded-b-lg lg:rounded-br-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 mt-4 font-semibold text-indigo-400">
                  Selected Work
                </h3>
                <p className="mt-2 text-md font-medium tracking-tight text-white">
                  Interfaces designed for clarity, performance, and feel.
                </p>
                <Experiences />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-br-lg lg:rounded-br-4xl" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-gray-800 max-lg:rounded-bl-lg lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <div className="px-10 pb-2 pt-4">
                <h3 className="text-sm/4 mt-4 font-semibold text-indigo-400">
                  Core Principles
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  From the first pixel to the final frame
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3 text-gray-400">
                  <li>Accessible by default</li>

                  <li>Responsive across every device</li>

                  <li>Lightweight and fast-loading</li>

                  <li>Consistent in style and structure</li>

                  <li>Built to scale, not just launch</li>
                  <li>Built to scale, not just launch</li>
                </ul>
              </div>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-speed.png"
                className="h-80 object-cover object-left-top"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-bl-lg lg:rounded-bl-4xl" />
          </div>
          <ContactSection />
        </div>
      </div>
      {/* Footer */}

      <Footer />
    </div>
  );
}
