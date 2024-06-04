import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect, useRef } from "react";
import { ArrowDown, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const Route = createFileRoute("/hi-fi/_hi-fi/step-4")({
  component: HifiComponent,
});

function HifiComponent() {
  const navigate = useNavigate();
  const [isBottom, setIsBottom] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        setIsBottom(true);
      }
    }
  };
  const scrollToEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      setIsBottom(true); // Ensure checkboxes are enabled after scrolling
    }
  };

  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener("scroll", handleScroll);
      return () => {
        currentScrollRef.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-center text-xl font-bold">確認資料</h2>

      <div className="rounded-lg bg-white p-4 shadow-md">
        <h2 className="border-l-4 border-blue-600 pl-2 text-xl font-semibold text-blue-600">
          確認旅遊明細
        </h2>
        <div className="mt-2 text-gray-700">
          <p>旅遊國家：日本</p>
          <p>旅遊期間：2024-06-13 00:00 ~ 2024-06-14 00:00:00 共1天</p>
        </div>
      </div>
      <div className="rounded-lg bg-white px-4 py-3 shadow-md">
        <h2 className="border-l-4 border-blue-600 pl-2 text-xl font-semibold text-blue-600">
          確認要保人資料
        </h2>
        <div className="mt-2 text-gray-700">
          <p>身分證/居留證：A12345678</p>
          <p>姓名：練家辰</p>
          <p>出生日期：2002-08-05</p>
          <p>手機號碼：0912345678</p>
          <p>電子郵件：abc@gmail.com</p>
          <p>職/行業別：一般職業(含學生、家庭主婦、退休人士)</p>
          <p>居住地址：台北市南港區重陽路45號</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
        <h2 className="border-l-4 border-blue-600 pl-2 text-xl font-semibold text-blue-600">
          確認被保人資料
        </h2>
        <div className=" text-gray-700">
          <h3 className="mb-2 text-lg font-bold">大人1</h3>
          <p>身分證/居留證：A12345678</p>
          <p>姓名：練家辰</p>
          <p>出生日期：2002-08-05</p>
          <p>保費：352</p>
          <p>職/行業別：一般職業(含學生、家庭主婦、退休人士)</p>
          <p>身故受益人：法定繼承人</p>
        </div>
        <h2 className="border-l-4 border-blue-600 pl-2 text-xl font-semibold text-blue-600">
          保障內容
        </h2>
        <div className=" text-gray-700">
          <div className="flex justify-between">
            <div>
              <p>意外死亡及失能</p>
              <p>傷害醫療</p>
              <p>個人賠償 (每一事故自負額2,500元)</p>
            </div>
            <div className="text-right">
              <p>1000萬</p>
              <p>100萬</p>
              <p>體傷20萬 / 財損10萬 / 保期內最高60萬</p>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-blue-500 underline">
              顯示詳細保障項目
            </AccordionTrigger>
            <AccordionContent>
              <h2 className="border-l-4 border-amber-400 pl-2 text-xl font-semibold text-amber-400">
                國外旅遊不便險
              </h2>
              <div className="text-gray-700">
                <div className="mb-2 flex justify-between">
                  <p>班機延誤保險 (至少4小時)</p>
                  <p>定額 6,000</p>
                </div>
                <div className="mb-2 flex justify-between">
                  <p>行李延誤保險</p>
                  <p>定額 6,000</p>
                </div>
                <div className="mb-2 flex justify-between">
                  <p>行李損失保險</p>
                  <p>定額 6,000</p>
                </div>
                <div className="mb-2 flex justify-between">
                  <p>旅行文件損失保險</p>
                  <p>定額 6,000</p>
                </div>
                <div className="mb-2 flex justify-between">
                  <p>旅程取消保險</p>
                  <p>限額 1萬</p>
                </div>
                <div className="mb-2 flex justify-between">
                  <p>旅程更改保險</p>
                  <p>限額 1萬</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mx-auto flex max-w-lg flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
        <h2 className="border-l-4 border-blue-600 pl-2 text-xl font-semibold text-blue-600">
          總保費金額 & 保單型式
        </h2>
        <div className="flex items-start">
          <input type="checkbox" className="mr-2 mt-1" />
          <div>
            <p>我瞭解本次投保提供電子保單</p>
            <p className="text-gray-500">
              (寄送對象為要保人電子郵件：abc@gmail.com)
            </p>
          </div>
        </div>
        <div className="rounded border border-blue-500 bg-blue-100 p-4 text-center">
          <p className="text-lg font-bold">總計保費</p>
          <p className="text-2xl text-red-500">$352 / 1人</p>
        </div>
      </div>

      <div className="relative flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-md">
        <div className="flex flex-col gap-4">
          <h3 className="border-l-4 border-blue-600 pl-2 text-xl font-semibold text-blue-600">
            同意聲明告知事項{" "}
            {isBottom && <Check className="ml-2 text-green-500" />}
          </h3>
          <h4 className="flex scroll-m-20 border-b text-lg font-semibold tracking-tight">
            本商品投保須知{" "}
            {isBottom && <Check className="ml-2 text-green-500" />}
          </h4>
          <h4 className="flex scroll-m-20 border-b text-lg font-semibold tracking-tight">
            本商品條款內容{" "}
            {isBottom && <Check className="ml-2 text-green-500" />}
          </h4>
        </div>
        {!isBottom && (
          <ArrowDown
            className="absolute bottom-24 left-[45%] z-10 animate-bounce cursor-pointer stroke-[3px] text-red-500"
            onClick={scrollToEnd}
          />
        )}

        <ScrollArea ref={scrollRef} className="h-[200px] border p-4">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop.
        </ScrollArea>
        <p
          className={`w-full text-center text-lg ${isBottom ? "text-green-500" : "text-red-500"}`}
        >
          {isBottom ? "已完成閱覽" : "請滑動並詳閱條款所載完整內容"}
        </p>
        <div className="flex">
          <Checkbox id="agreeTerms" className="mr-2" disabled={!isBottom} />
          <Label htmlFor="agreeTerms">我已閱讀並同意保單條款全文</Label>
        </div>
      </div>
      <div className="flex gap-4">
        <Button
          className="w-full rounded text-center font-bold"
          variant="outline"
        >
          返回
        </Button>
        <Button
          className="w-full rounded bg-blue-600 text-center font-bold"
          onClick={() => {
            navigate({
              to: "/hi-fi/step-5",
            });
          }}
        >
          確認
        </Button>
      </div>
    </div>
  );
}
