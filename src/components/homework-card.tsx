import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
export const HomeworkCard = ({
  title,
  description,
  hw,
}: {
  title: string;
  description: string;
  hw: "hw1" | "hw2";
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative z-10 flex max-w-lg flex-col gap-4 overflow-hidden rounded-lg bg-neutral-700 p-4">
      <h2 className="scroll-m-20 border-l-4 border-green-400 pl-2 text-3xl font-semibold tracking-wide text-white first:mt-0">
        {title}
      </h2>
      <p className="leading-7 text-neutral-200 [&:not(:first-child)]:my-6">
        {description}
      </p>
      <Button
        className="w-max bg-green-400 text-[#232323] hover:bg-green-600/90"
        onClick={() => {
          navigate({
            to: `/${hw}`,
          });
        }}
      >
        See more
      </Button>
      <span className="absolute -right-4 -z-10 text-6xl font-extrabold uppercase text-[#232323bb] lg:-top-10 lg:text-[9rem]">
        {hw}
      </span>
    </div>
  );
};
