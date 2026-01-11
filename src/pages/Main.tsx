import Avatar from "@/sections/Avatar";
import Footer from "@/sections/Footer";
import TechSection from "@/sections/TechSection";
import CorePrinciple from "@/sections/CorePrinciple";
import ProjectShowcase from "@/sections/ProjectShowcase";
import Testimonials from "@/sections/Testimonials";
import { ScrollSlideText } from "@/components/motion/ScrollSlideText";
import { BreakingSlideText } from "@/components/motion/BreakingSlideText";

export default function Main() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <ScrollSlideText duration={1}>
          <h2 className="text-base/7 font-semibold text-indigo-400">
            Innovation That Delivers Value
          </h2>
        </ScrollSlideText>
        <div className="flex">
          <div className="mt-2 sm:text-6xl text-5xl font-semibold tracking-tight text-pretty text-white">
            <p>
              <BreakingSlideText split="letter" text="Simple ideas." />
            </p>
            <p>
              <BreakingSlideText
                split="letter"
                text="Purpose-driven execution."
              />
            </p>
            <p>
              <BreakingSlideText split="letter" text="Refined results." />
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-4 lg:grid-cols-8">
          {/* Foreground content */}
          <div className="relative lg:col-span-5">
            <div className="absolute inset-0 rounded-lg max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="flex bg-gradient-to-t from-gray-900 to-black h-full rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <div className="relative z-10 p-12">
                <Avatar />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </div>

          {/* last Update */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col bg-gradient-to-t  from-gray-900 to-black overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 mt-4 font-semibold text-indigo-400">
                  Last updated
                </h3>
                <ul className="list-disc mt-2">
                  <li className="mt-2 ">
                    Modern frameworks & immersive animations
                    <p className="mt-2 body2">
                      Diving deep into Angular and Next.js for scalable,
                      high-performance web apps, while mastering Framer Motion
                      and Three.js to craft smooth, expressive animations and
                      captivating 3D experiences.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 lg:rounded-tr-4xl" />
          </div>

          {/* Project Showcase */}
          <div className="relative overflow-hidden lg:col-span-6">
            <div className="absolute inset-0 rounded-lg bg-gray-900" />
            <div className="relative flex h-full flex-col rounded-lg">
              <ProjectShowcase />
            </div>
            <div className="pointer-events-none absolute inset-[1px] rounded-lg shadow-sm outline outline-white/15" />
          </div>

          {/* Tech Section */}
          <div className="relative lg:row-span-2 lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-gray-900 max-lg:rounded-b-lg lg:rounded-br-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <TechSection />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-br-lg lg:rounded-br-4xl" />
          </div>

          {/* Core Principles */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-gray-900 to-gray-900 max-lg:rounded-bl-lg lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-bl-[calc(2rem+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <CorePrinciple />
              <div className="mt-50"></div>
              <div className="absolute left-0 z-10 opacity-60 -bottom-25">
                <img
                  alt=""
                  src="images/dark-keyboard-01.png"
                  className="h-80 object-cover bg-blend-difference object-left-top"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-bl-lg lg:rounded-bl-4xl" />
          </div>

          {/* Review */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-gray-900 max-lg:rounded-bl-lg lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-bl-[calc(2rem+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <Testimonials />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-bl-lg lg:rounded-bl-4xl" />
          </div>
        </div>
      </div>
      {/* Footer */}

      <Footer />
    </div>
  );
}
