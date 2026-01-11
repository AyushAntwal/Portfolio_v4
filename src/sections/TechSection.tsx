import { ScrollSlideText } from "@/components/motion/ScrollSlideText";
import TechStack from "./TechStage";

export default function TechSection() {
  return (
    <section className="flex flex-col h-full justify-baseline rounded-[calc(var(--radius-lg)+1px)]">
      {/* <TechStackCard /> */}
      <div className="p-10 z-10 mt-1 tracking-tight font-extralight text-sm/6 text-gray-200 pt-4">
        <ScrollSlideText>
          <h3 className="text-sm/4 font-semibold text-indigo-400">Toolkit</h3>
        </ScrollSlideText>

        <p className="mt-2">Tools I trust to build and scale real products</p>
        <div className="mt-2">
          <TechStack />
        </div>
      </div>
    </section>
  );
}
