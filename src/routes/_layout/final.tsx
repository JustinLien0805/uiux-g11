import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SquareArrowOutUpRight } from "lucide-react";

export const Route = createFileRoute("/_layout/final")({
  component: FinalComponent,
});

function FinalComponent() {
  const navigate = useNavigate();
  return (
    <main className="relative flex min-h-screen gap-6 px-2 pb-40 pt-20 text-white md:px-40">
      <div className="flex flex-col">
        <div className="flex items-center">
          <h1 className="mr-auto scroll-m-20 text-4xl font-extrabold uppercase tracking-tight lg:text-5xl">
            Final Report
          </h1>
        </div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Hi-Fi Prototype
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We generate a Hi-Fi prototype based on the Lo-fi prototype and revise
          the design based on the feedback from the participants.
        </p>
        <Button
          className="mt-7 w-max bg-green-400 text-[#232323] hover:bg-green-600/90"
          onClick={() => {
            navigate({
              to: "/hi-fi/step-1",
            });
          }}
        >
          Visit Hi-Fi Prototype
          <SquareArrowOutUpRight className="ml-2 h-6 w-6" />
        </Button>
      </div>
    </main>
  );
}
