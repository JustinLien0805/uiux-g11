import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

import { MoveDown } from "lucide-react";
import { HomeworkCard } from "@/components/homework-card";
export const Route = createFileRoute("/")({
  component: HomeComponent,
});

type hwDataType = {
  title: string;
  description: string;
  hw: "hw1" | "hw2";
};
const hwData: hwDataType[] = [
  {
    title: "CI and Models",
    description:
      "Conducted a contextual inquiry with two participants to observe their interactions and behaviors while purchasing travel insurance on the 新安東京海上產險 .",
    hw: "hw1",
  },
  {
    title: "Affinity Diagram",
    description:
      "Created an affinity diagram through the insights we gathered from the contextual inquiry to identify the pain points and opportunities for improvement.",
    hw: "hw2",
  },
];
function HomeComponent() {
  const targetSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (): void => {
    targetSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="flex h-[80vh] flex-col items-start justify-center bg-[#232323] p-2 md:px-20 lg:px-40">
        <section className="flex flex-col gap-4">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-wide text-white first:mt-0">
            UIUX Group 11
          </h2>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide text-white md:text-7xl">
            新安東京海上產險
          </h1>
          <Button
            className="w-max bg-green-400 text-[#232323] hover:bg-green-600/90"
            onClick={scrollToSection}
          >
            Explore
            <MoveDown className="ml-2 h-6 w-6 animate-bounce" />
          </Button>
        </section>
      </div>
      <section
        className="flex min-h-[80vh] flex-col items-center gap-4 bg-[#232323] p-2 text-white md:px-20 lg:px-40"
        ref={targetSectionRef}
      >
        <h2 className="mb-6 mt-10 scroll-m-20 border-b-4 border-green-400 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Homeworks
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {hwData.map((hw, index) => (
            <HomeworkCard
              key={index}
              title={hw.title}
              description={hw.description}
              hw={hw.hw}
            />
          ))}
        </div>
      </section>
    </>
  );
}
