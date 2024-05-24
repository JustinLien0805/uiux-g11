import { ScrollArea } from "@/components/ui/scroll-area";
import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import sketch1 from "../assets/sketch/1.png";
import sketch2 from "../assets/sketch/2.png";
import sketch3 from "../assets/sketch/3.png";
import sketch4 from "../assets/sketch/4.jpg";
import sketch5 from "../assets/sketch/5.jpg";
import sketch6 from "../assets/sketch/6.jpg";
import sketch7 from "../assets/sketch/7.jpg";
import lofiPdf from "../assets/lofi.pdf";
import revisionplan from "../assets/revisionplan.pdf";
import { Button } from "@/components/ui/button";
import { PDFViewer } from "@/components/pdf-reader";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Link } from "lucide-react";

const imgRoutes = [
  { path: sketch5, name: "sketch5.jpg" },
  { path: sketch1, name: "sketch1.png" },
  { path: sketch2, name: "sketch2.png" },
  { path: sketch3, name: "sketch3.png" },
  { path: sketch6, name: "sketch6.jpg" },
  { path: sketch7, name: "sketch7.jpg" },
  { path: sketch4, name: "sketch4.jpg" },
];

export const Route = createFileRoute("/hw4")({
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
    const files: { path: string; name: string }[] = [
      {
        path: lofiPdf,
        name: "lofi.pdf",
      },
      {
        path: revisionplan,
        name: "revisionplan.pdf",
      },
      ...imgRoutes,
    ];

    for (let file of files) {
      const response = await fetch(file.path);
      const blob = await response.blob();
      zip.file(file.name, blob);
    }

    // Generate zip file and trigger download
    zip
      .generateAsync({ type: "blob" })
      .then((content) => {
        saveAs(content, "hw4_g11.zip");
      })
      .catch((e) => console.error("Error creating zip file:", e));
  };
  return (
    <main className="relative flex gap-6 px-2 pb-40 pt-20 text-white md:px-40">
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <h1 className="mr-auto scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            HW4: LO-FI PROTOTYPE
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
          Sketch
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {imgRoutes.map((img, i) => (
            <img
              key={i}
              src={img.path}
              alt={`sketch ${i + 1}`}
              className={`rounded-lg ${i === 0 || i === 6 ? "col-span-2" : ""}`}
            />
          ))}
        </div>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Lo-fi Prototype
        </h2>
        <h3 className="mt-8 flex scroll-m-20 items-center text-2xl font-semibold tracking-tight">
          Figma
          <a
            href="https://www.figma.com/file/zH1nagYBwEnZNtgDC7gCC0/UIUX?type=design&node-id=0%3A1&mode=design&t=F6e8qalJ9t1lUlrq-1"
            target="_blank"
            rel="noreferrer"
          >
            <Link className="ml-2 h-6 w-6" />
          </a>
        </h3>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Revision Plan
        </h2>
        <PDFViewer url={revisionplan} />
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
                      Sketch
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
