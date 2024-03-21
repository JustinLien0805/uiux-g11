import { ScrollArea } from "@/components/ui/scroll-area";
import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { PDFViewer } from "@/components/pdf-reader";
import am1 from "../assets/am1.png";
import am2 from "../assets/am2.png";
import fm1 from "../assets/fm1.png";
import fm2 from "../assets/fm2.png";
export const Route = createFileRoute("/hw1")({
  component: HwComponent,
});

function HwComponent() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="relative flex gap-6 px-2 pb-40 pt-20  text-white md:px-40">
      <div className="flex flex-col">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          HW1: CI and Models
        </h1>
        <h2
          ref={section1Ref}
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        >
          Test Script and Transcripts
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          In this study, we conducted a contextual inquiry with two participants
          to observe their interactions and behaviors while purchasing travel
          insurance on the{" "}
          <a
            href="https://www.tmnewa.com.tw/ec/travel/overseas/#/"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-medium underline underline-offset-4"
          >
            新安東京海上產險
          </a>
          .
        </p>
        <PDFViewer />
        <h2
          ref={section2Ref}
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        >
          Flow Model
        </h2>
        <div className="flex flex-col gap-4 bg-white">
          <img src={fm1} alt="" />
          <img src={fm2} alt="" />
        </div>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          User Behavior Insights from Travel Insurance Purchase Process
        </h3>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          1. User Behavior Understanding:
        </h4>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Users tend to go straight into operations without looking at product
            details first when purchasing travel insurance.
          </li>
          <li>
            When encountering limitations (such as unavailable date selection),
            users may quickly jump to conclusions instead of seeking solutions,
            indicating limited patience in problem situations.
          </li>
          <li>
            There is a high expectation for directness and simplicity in the
            purchase process among users.
          </li>
        </ul>

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          2. Pain Points Identification:
        </h4>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Users are unable to select travel dates more than a month in
            advance, limiting their planning flexibility.
          </li>
          <li>
            Lack of reminder functionality leads to potential forgetfulness in
            purchasing insurance before departure.
          </li>
          <li>
            Interface restrictions and lack of error messages when selecting
            insurance dates increase user confusion and frustration.
          </li>
        </ul>

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          3. Opportunity Discovery:
        </h4>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Introduction of Reminder Feature: Based on user feedback, providing
            an option to set reminders could help users return at an appropriate
            time to complete their purchase, thus improving conversion rates.
          </li>
          <li>
            Improvement of Date Selection Function: Allowing users to select
            dates in advance and providing clear error messages and suggestions
            when choosing unavailable dates to enhance user experience.
          </li>
          <li>
            Enhancing Process Transparency: Offering an estimate of the time
            required to complete the purchase process increases user confidence
            and satisfaction.
          </li>
        </ul>

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          4. User Needs Insight:
        </h4>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Users require an intuitive, quick, and seamless purchase process.
          </li>
          <li>
            For travel insurance purchases, users are more focused on outcomes
            (choosing plans that meet their main criteria) rather than the
            details of the process.
          </li>
          <li>
            Users expect immediate feedback and guidance when faced with issues
            or restrictions.
          </li>
          <li>
            When planning trips well in advance, users might need additional
            reminders to ensure they complete the important step of purchasing
            insurance.
          </li>
        </ul>
        <h2
          ref={section3Ref}
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        >
          Artifact Model
        </h2>
        <div className="flex flex-col gap-4">
          <img src={am1} alt="" />
          <img src={am2} alt="" />
        </div>
      </div>
      <div className="hidden w-96 text-sm text-neutral-300 lg:block">
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
                      Test Script and Transcripts
                    </a>
                  </li>
                  <li className="mt-0 pt-2">
                    <a
                      className="inline-block cursor-pointer no-underline transition-colors hover:text-neutral-100"
                      onClick={() => {
                        scrollToSection(section2Ref);
                      }}
                    >
                      Flow Model
                    </a>
                  </li>
                  <li className="mt-0 pt-2">
                    <a
                      className="inline-block cursor-pointer no-underline transition-colors hover:text-neutral-100"
                      onClick={() => {
                        scrollToSection(section3Ref);
                      }}
                    >
                      Artifact Model
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
