import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hi-fi")({
  component: HwComponent,
});

function HwComponent() {
  return (
    <div className="min-h-screen">
      <header className="h-24">
        <h1 className="text-center text-3xl font-bold">新安東京海上產險</h1>
      </header>
    </div>
  );
}
