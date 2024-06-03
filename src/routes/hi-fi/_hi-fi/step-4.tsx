import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect, useRef } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-center text-xl font-bold">填寫資料</h2>
      <h2 className="text-center text-xl font-bold">要保人資料</h2>
      <div className="flex">
        <Checkbox id="autoUpdate" className="mr-2" defaultChecked />
        <Label htmlFor="autoUpdate">訂單完成後同步更新會員資料</Label>
      </div>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div>
            <Label className="mb-2 block">身分證/居留證 *</Label>
            <Input
              type="text"
              className="w-full border p-2"
              defaultValue="A123456789"
            />
          </div>
          <div>
            <Label className="mb-2 block">姓名 *</Label>
            <Input
              type="text"
              className="w-full border p-2"
              defaultValue="練家辰"
            />
          </div>
          <div>
            <Label className="mb-2 block">手機號碼 *</Label>
            <Input
              type="text"
              className="w-full border p-2"
              defaultValue="0912345678"
            />
          </div>
          <div>
            <Label className="mb-2 block">國籍 *</Label>
            <Select defaultValue="台灣">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="台灣">台灣</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2 block">電子郵件 *</Label>
            <Input type="email" className="w-full border p-2" />
          </div>
          <div>
            <Label className="mb-2 block">職/行業別 *</Label>
            <Select defaultValue="一般職業">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="一般職業">一般職業</SelectItem>
                  <SelectItem value="律師">律師</SelectItem>
                  <SelectItem value="會計師">會計師</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>地址 *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="縣市" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="台北市">台北市</SelectItem>
                  <SelectItem value="新北市">新北市</SelectItem>
                  <SelectItem value="桃園市">桃園市</SelectItem>
                  <SelectItem value="台中市">台中市</SelectItem>
                  <SelectItem value="台南市">台南市</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="區域" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="中正區">中正區</SelectItem>
                  <SelectItem value="大同區">大同區</SelectItem>
                  <SelectItem value="中山區">中山區</SelectItem>
                  <SelectItem value="松山區">松山區</SelectItem>
                  <SelectItem value="大安區">大安區</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              type="text"
              className="w-full border p-2"
              placeholder="巷/弄/號/樓"
            />
          </div>
        </div>

        <h2 className="text-center text-xl font-bold">要保人資料</h2>
        <div className="flex">
          <Checkbox id="same" className="mr-2" />
          <Label htmlFor="same">同要保人資料</Label>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <Label className="mb-2 block">身分證/居留證 *</Label>
            <Input
              type="text"
              className="w-full border p-2"
              defaultValue="A123456789"
            />
          </div>
          <div>
            <Label className="mb-2 block">姓名 *</Label>
            <Input
              type="text"
              className="w-full border p-2"
              defaultValue="練家辰"
            />
          </div>
          <div>
            <Label className="mb-2 block">手機號碼 *</Label>
            <Input
              type="text"
              className="w-full border p-2"
              defaultValue="0912345678"
            />
          </div>
          <div>
            <Label className="mb-2 block">國籍 *</Label>
            <Select defaultValue="台灣">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="台灣">台灣</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2 block">電子郵件 *</Label>
            <Input type="email" className="w-full border p-2" />
          </div>
          <div>
            <Label className="mb-2 block">職/行業別 *</Label>
            <Select defaultValue="一般職業">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="一般職業">一般職業</SelectItem>
                  <SelectItem value="律師">律師</SelectItem>
                  <SelectItem value="會計師">會計師</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>地址 *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="縣市" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="台北市">台北市</SelectItem>
                  <SelectItem value="新北市">新北市</SelectItem>
                  <SelectItem value="桃園市">桃園市</SelectItem>
                  <SelectItem value="台中市">台中市</SelectItem>
                  <SelectItem value="台南市">台南市</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="區域" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="中正區">中正區</SelectItem>
                  <SelectItem value="大同區">大同區</SelectItem>
                  <SelectItem value="中山區">中山區</SelectItem>
                  <SelectItem value="松山區">松山區</SelectItem>
                  <SelectItem value="大安區">大安區</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              type="text"
              className="w-full border p-2"
              placeholder="巷/弄/號/樓"
            />
          </div>
          <div>
            <Label className="mb-2 block">被保險人是要保人的誰(關係) *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="請選擇關係" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="本人">本人</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2 block">身故受益人 *</Label>
            <RadioGroup
              defaultValue="option-one"
              className="flex items-center justify-center gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">法定繼承人</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">指定受益人</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <h3 className="text-lg font-bold">同意聲明告知事項</h3>
        <div className="relative flex flex-col gap-4 rounded-md border bg-gray-300 p-4">
          <div className="flex flex-col">
            <h4 className="scroll-m-20 border-b py-2 text-xl font-semibold tracking-tight">
              個人資料告知事項
            </h4>
            <h4 className="scroll-m-20 border-b py-2 text-xl font-semibold tracking-tight">
              會員服務條款
            </h4>
            <h4 className="scroll-m-20 border-b py-2 text-xl font-semibold tracking-tight">
              網路投保注意及聲明事項
            </h4>
            <h4 className="scroll-m-20 border-b py-2 text-xl font-semibold tracking-tight">
              網路保險服務定型化契約
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
          <p className="w-full text-center text-lg text-red-500">
            請滑動並詳閱條款所載完整內容
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
        <div className="flex">
          <Button
            className="w-full rounded text-center font-bold"
            variant="secondary"
          >
            返回
          </Button>
          <Button
            className="w-full rounded text-center font-bold"
            onClick={() => {
              navigate({
                to: "/hi-fi/step-5",
              });
            }}
          >
            立即投保
          </Button>
        </div>
      </form>
    </div>
  );
}
