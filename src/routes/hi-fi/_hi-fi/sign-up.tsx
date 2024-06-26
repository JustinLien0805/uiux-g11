import { createFileRoute } from "@tanstack/react-router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect, useRef } from "react";
import { ArrowDown, Check } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
export const Route = createFileRoute("/hi-fi/_hi-fi/sign-up")({
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
    <div className="p-4">
      <h2 className="mb-4 text-center text-xl font-bold">會員註冊</h2>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 rounded-lg bg-white p-4 shadow-md">
          <h3 className="border-l-4 border-blue-600 pl-2 text-xl font-semibold text-blue-600">
            註冊資料
          </h3>
          <div>
            <Label className="mb-1 block">身分證號 *</Label>
            <Input type="text" className="w-full border p-2" />
          </div>
          <div>
            <Label className="mb-1 block">姓名 *</Label>
            <Input type="text" className="w-full border p-2" />
          </div>
          <div>
            <Label className="mb-1 block">手機號碼 *</Label>
            <Input type="text" className="w-full border p-2" />
          </div>
          <div>
            <Label className="mb-1 block">電子郵件 *</Label>
            <Input type="email" className="w-full border p-2" />
          </div>
        </div>

        <div className="relative flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-md">
          <div className="flex flex-col gap-4">
            <h3 className="border-l-4 border-blue-600 pl-2 text-xl font-semibold text-blue-600">
              同意聲明告知事項
            </h3>
            <h4 className="flex scroll-m-20 border-b text-lg font-semibold tracking-tight">
              個人資料告知事項{" "}
              {isBottom && <Check className="ml-2 text-green-500" />}
            </h4>
            <h4 className="flex scroll-m-20 border-b text-lg font-semibold tracking-tight">
              會員服務條款{" "}
              {isBottom && <Check className="ml-2 text-green-500" />}
            </h4>
            <h4 className="flex scroll-m-20 border-b text-lg font-semibold tracking-tight">
              網路投保注意及聲明事項{" "}
              {isBottom && <Check className="ml-2 text-green-500" />}
            </h4>
            <h4 className="flex scroll-m-20 border-b text-lg font-semibold tracking-tight">
              網路保險服務定型化契約
              {isBottom && <Check className="ml-2 text-green-500" />}
            </h4>
          </div>
          {!isBottom && (
            <ArrowDown
              className="absolute bottom-32 left-[45%] z-10 animate-bounce cursor-pointer stroke-[3px] text-red-500"
              onClick={scrollToEnd}
            />
          )}

          <ScrollArea ref={scrollRef} className="h-[200px] border p-4">
            Jokester began sneaking into the castle in the middle of the night
            and leaving jokes all over the place: under the king's pillow, in
            his soup, even in the royal toilet. The king was furious, but he
            couldn't seem to stop Jokester. And then, one day, the people of the
            kingdom discovered that the jokes left by Jokester were so funny
            that they couldn't help but laugh. And once they started laughing,
            they couldn't stop.
          </ScrollArea>
          <p
            className={`w-full text-center text-lg ${isBottom ? "text-green-500" : "text-red-500"}`}
          >
            {isBottom ? "已完成閱覽" : "請滑動並詳閱條款所載完整內容"}
          </p>
          <div className="flex">
            <Checkbox id="agreeTerms" className="mr-2" disabled={!isBottom} />
            <Label htmlFor="agreeTerms">我已閱讀並同意上述說明</Label>
          </div>

          <div className="flex">
            <Checkbox
              id="agreeMembership"
              className="mr-2"
              disabled={!isBottom}
            />
            <Label htmlFor="agreeMembership">
              同意註冊成為新安東京海上網路投保會員
            </Label>
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
                to: "/hi-fi/verify",
              });
            }}
          >
            確認
          </Button>
        </div>
      </form>
    </div>
  );
}
