import { ScrollArea } from "@/components/ui/scroll-area";
import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { PDFViewer } from "@/components/pdf-reader";
import { Link } from "lucide-react";
import fm1 from "../assets/fm1.svg";
import fm2 from "../assets/fm2.svg";
import textscript from "../assets/textscript.pdf";
import afUrl from "../assets/af.pdf";
export const Route = createFileRoute("/hw1")({
  component: HwComponent,
});

function HwComponent() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="relative flex gap-6 px-2 pb-40 pt-20 text-white md:px-40">
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
        <h3 className="mt-8 flex scroll-m-20 items-center text-2xl font-semibold tracking-tight">
          Test Script
          <a
            href="https://docs.google.com/document/d/17fco9uX5bkuyUdwyPhS6wCuRDFIUPmST9qYSxpV1Ppo/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Link className="ml-2 h-6 w-6" />
          </a>
        </h3>
        <h3 className="mt-8 flex scroll-m-20 items-center text-2xl font-semibold tracking-tight">
          Transcript
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Here are the Transcripts of the two participants
        </p>
        <PDFViewer url={textscript} />
        <h2
          ref={section2Ref}
          className="mb-6 mt-10 scroll-m-20  border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        >
          Flow Model
        </h2>
        <div className="flex w-2/3 flex-col gap-4 self-center">
          <img src={fm1} alt="" />
          <img src={fm2} alt="" />
        </div>

        <h2
          ref={section3Ref}
          className="mb-6 mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        >
          Artifact Model
        </h2>
        <PDFViewer url={afUrl} />
        <h2
          ref={section4Ref}
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        >
          CI Summary
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          First, we looked at the brief backgrounds of our two participants, in
          which we found out that Interviewee 1 (24-year-old male) travels
          frequently, about once per month, with upcoming trips to Japan and
          China. He recognizes the importance of travel insurance but often
          forgets until the last minute before flights. Priorities are medical
          coverage for accidents and coverage for airline issues. Interviewee 2
          (54-year-old female) is an infrequent traveler but always purchases
          travel insurance when traveling. Priorities are similar to interviewee
          1.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          After the interviews, we observed the actions and feedback of the two
          participants. In the beginning, interviewee 1 did not review product
          details and immediately tried to purchase a plan. He wanted to abandon
          initially when unable to select travel dates over a month out with no
          explanation provided. Interviewee 2, however, did choose the South
          East Asia Plan and spent little time on the underwriting notification
          pop-up. She encountered an issue of not being able to find the country
          she wanted to go to while navigating the country selection even though
          she had already chosen the plan and ran into a couple of error pop-ups
          from skipping some basic information buttons because she didn't know
          she need to scroll through the terms and service to be able to
          proceed. She was being interrupted by the huge X icon so she couldn't
          find the actual close button. We noticed that both participants wanted
          to abandon their purchasing process when they were asked to register
          for an account, as the process was complicated and required phone
          verification. The form was also frustrating for them to identify which
          form was required or optional. After that, the process went smoothly
          until the payment process, where both interviewees found it
          troublesome that they needed to do the phone verification again.
          Interviewee 1 especially pointed out that the payment method is too
          limited, he couldn't use the method he wanted like Apple Pay, Line
          Pay, etc.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          After further analysis, we came to the following conclusion regarding
          the usability issue review and future suggestions. Interviewee 1 could
          not select travel dates too far in the future with no clarification on
          allowable date ranges. Interviewee 2 had to re-select the country
          after initial regional choice. She skipped age/date fields initially,
          and was unable to raise some compensation limits as desired. Suggested
          shopping cart-style plan selection over default/add-on format.
          Suggestions include adding travel insurance reminder functionality or
          clear date range policies, since many scope out options but forget to
          purchase closer to trips, data support on popular plans/pricing to
          guide decisions, and a shopping cart-style plan selection process.
        </p>
      </div>
      <div className="hidden w-full text-sm text-neutral-300 lg:block">
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
                  <li className="mt-0 pt-2">
                    <a
                      className="inline-block cursor-pointer no-underline transition-colors hover:text-neutral-100"
                      onClick={() => {
                        scrollToSection(section4Ref);
                      }}
                    >
                      Summary
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
