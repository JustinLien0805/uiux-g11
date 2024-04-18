import { ScrollArea } from "@/components/ui/scroll-area";
import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Button } from "../components/ui/button";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import affinitydiagram from "../assets/affinitydiagram.jpg";

export const Route = createFileRoute("/hw2")({
  component: HwComponent,
});

function HwComponent() {
  const section1Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = async () => {
    const zip = new JSZip();

    // List of files to add to the zip
    const file: { path: string; name: string } = {
      path: affinitydiagram,
      name: "affinity_diagram.jpg",
    };

    // Add files to zip
    const response = await fetch(file.path);
    const blob = await response.blob();
    zip.file(file.name, blob);

    // Generate zip file and trigger download
    zip
      .generateAsync({ type: "blob" })
      .then((content) => {
        saveAs(content, "hw2_g11.zip");
      })
      .catch((e) => console.error("Error creating zip file:", e));
  };
  return (
    <main className="relative flex min-h-screen gap-6 px-2 pb-40 pt-20 text-white md:px-40">
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center">
          <h1 className="mr-auto scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            HW2: AFFINITY DIAGRAM
          </h1>
          <Button
            className="w-max bg-green-400 text-[#232323] hover:bg-green-600/90"
            onClick={handleDownload}
          >
            Download
          </Button>
        </div>

        <h2
          ref={section1Ref}
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        >
          Persona
        </h2>
        <img src={affinitydiagram} alt="affinitydiagram" />
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
