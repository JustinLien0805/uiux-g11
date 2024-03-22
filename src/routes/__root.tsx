import { Outlet, createRootRoute, useNavigate } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Button } from "@/components/ui/button";

const RootComponent = () => {
  const navigate = useNavigate();
  const hws = ["HW1", "HW2", "HW3", "HW4", "HW5", "HW6"];

  return (
    <>
      <div className="relative flex flex-col bg-[#232323]">
        <nav className="sticky top-0 z-30 flex items-center gap-2 bg-[#2323233e] px-2 py-2 text-white backdrop-blur-md md:px-40">
          <h2
            className="mr-auto cursor-pointer text-lg font-bold hover:bg-[#232323] hover:text-white"
            onClick={() => {
              navigate({
                to: "/",
              });
            }}
          >
            UIUX
          </h2>
          {hws.map((hw, index) => (
            <Button
              key={index}
              variant="ghost"
              className={
                window.location.pathname.includes(hw.toLowerCase())
                  ? "bg-transparent text-green-400 hover:bg-green-400"
                  : ""
              }
              onClick={() => {
                navigate({
                  to: hw.toLowerCase(),
                });
              }}
            >
              {hw}
            </Button>
          ))}
        </nav>
        <Outlet />
      </div>

      {/* <TanStackRouterDevtools /> */}
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
