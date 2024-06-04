import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";
export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  const navigate = useNavigate();
  const hws = ["HW1", "HW2", "HW3", "HW4", "FINAL"];
  const [id, setId] = useState<string>("");
  return (
    <>
      <nav className="sticky top-0 z-30 flex items-center gap-2 bg-[#2323233e] p-2 px-2 py-2 text-white backdrop-blur-md md:px-20 lg:px-40">
        <h2
          className="mr-4 cursor-pointer text-lg font-bold hover:bg-[#232323] hover:text-white sm:mr-auto sm:text-xl"
          onClick={() => {
            navigate({
              to: "/",
            });
            setId("");
          }}
        >
          UIUX
        </h2>
        <div className="relative overflow-x-scroll">
          <ScrollArea className="max-w-[380px] lg:max-w-none">
            <div className="flex items-center">
              {hws.map((hw, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={
                    id === hw
                      ? "bg-transparent text-green-400 hover:bg-green-400"
                      : ""
                  }
                  onClick={() => {
                    navigate({
                      to: hw.toLowerCase(),
                    });
                    setId(hw);
                  }}
                >
                  {hw}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="invisible" />
          </ScrollArea>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
