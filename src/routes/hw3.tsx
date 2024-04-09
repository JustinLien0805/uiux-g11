import { ScrollArea } from "@/components/ui/scroll-area";
import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import persona from "../assets/persona.png";
export const Route = createFileRoute("/hw3")({
  component: HwComponent,
});

function HwComponent() {
  const section1Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="relative flex gap-6 px-2 pb-40 pt-20 text-white md:px-40">
      <div className="flex flex-col gap-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          HW3: PERSONA
        </h1>
        <h2
          ref={section1Ref}
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        >
          Persona
        </h2>
        <img src={persona} alt="persona" />
      </div>
      <div className="hidden w-60 text-sm text-neutral-300 lg:block">
        <div className="sticky top-16  pt-4">
          <ScrollArea className="pb-10">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
              <div className="space-y-2">
                <p className="font-medium">On This Page</p>
                <ul className="m-0 list-none pl-4">
                  <li className="mt-0 pt-2">
                    <a
                      className="inline-block cursor-pointer no-underline transition-colors hover:text-neutral-100"
                      onClick={() => {
                        scrollToSection(section1Ref);
                      }}
                    >
                      Persona
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
