import { useRef } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowBigRightDash, MoveDown } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const targetSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (): void => {
    targetSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-[80vh] flex-col items-start justify-center bg-[#232323] p-10 md:px-40">
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
        className="flex min-h-[80vh] items-start gap-4 bg-[#232323] p-10 text-white md:px-40"
        ref={targetSectionRef}
      >
        <div className="h-96 w-96 bg-white"></div>
        <div className="flex w-1/2 flex-col">
          <h2 className="scroll-m-20 border-l-4 border-green-400 pl-2 text-3xl font-semibold tracking-wide text-white first:mt-0">
            HW1: CI and Models
          </h2>
          <p className="leading-7 [&:not(:first-child)]:my-6">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
          <Button
            className="w-max bg-green-400 text-[#232323] hover:bg-green-600/90"
            onClick={() => {
              navigate({
                to: "/hw1",
              });
            }}
          >
            See more
            <ArrowBigRightDash className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>
    </>
  );
}