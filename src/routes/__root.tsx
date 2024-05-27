import { Outlet, createRootRoute } from "@tanstack/react-router";

// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const RootComponent = () => {
  return (
    <>
      <div className="relative flex flex-col overflow-x-hidden bg-[#232323]">
        <Outlet />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
