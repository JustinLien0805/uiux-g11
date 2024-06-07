import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import MultipleSelector from "@/components/multi-select";
import { DatePickerWithRange } from "@/components/date-range-picker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OPTIONS, HOURS } from "@/lib/const";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlarmClock, Bell, CircleAlert } from "lucide-react";
import { useState } from "react";
import { addDays, format, differenceInDays, set } from "date-fns";
import { DateRange } from "react-day-picker";
export const Route = createFileRoute("/hi-fi/_hi-fi/step-1")({
  component: HifiComponent,
});

function HifiComponent() {
  const [reminderStep, setReminderStep] = useState<number>(0);
  const [date, setDate] = useState<DateRange | undefined>({
    // set to current date and 20 days from now
    from: new Date(),
    to: addDays(new Date(), 20),
  });
  const [hour, setHour] = useState<string>("08:00");
  const { toast } = useToast();
  const navigate = useNavigate();

  const isDateRangeValid = () => {
    if (!date?.from || !date?.to) {
      return;
    }

    if (differenceInDays(date?.from, Date.now()) > 30) {
      setReminderStep(0);
    } else {
      setReminderStep(2);
    }
  };

  return (
    <div className="mx-4 flex flex-col gap-4 rounded-lg bg-white px-4 py-3 shadow-md">
      <h2 className="scroll-m-20 p-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
        保費試算
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 rounded-lg border border-amber-400 p-2 text-sm">
          <Bell className="h10 w-10 text-amber-400" />{" "}
          目前僅開放滿18歲以上旅客幫自己一人投保，需用自己的信用卡，如有多人投保或其他需求，請改洽各分支機構詢問)。
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="flex scroll-m-20 items-center gap-2 text-xl font-semibold tracking-tight">
            旅遊國家
            <Popover>
              <PopoverTrigger asChild>
                <CircleAlert className="h-5 w-5 text-yellow-300" />
              </PopoverTrigger>
              <PopoverContent className="w-60 border border-yellow-300">
                <p>紅色警戒區域不可投保，國外旅遊國家最多可選10個。</p>
              </PopoverContent>
            </Popover>
          </h4>
          <MultipleSelector
            defaultOptions={OPTIONS}
            placeholder="選擇旅遊國家"
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                no results found.
              </p>
            }
            groupBy="group"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="flex scroll-m-20 items-center gap-2 text-xl font-semibold tracking-tight">
            投保身份與年齡
            <Popover>
              <PopoverTrigger asChild>
                <CircleAlert className="h-5 w-5 text-yellow-300" />
              </PopoverTrigger>
              <PopoverContent className="w-60 border border-yellow-300">
                <p>請必選自己的身份及所屬的年齡區間。</p>
              </PopoverContent>
            </Popover>
          </h4>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="請選擇身份與年齡" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>請選擇身份與年齡</SelectLabel>
                <SelectItem value="apple">大人（滿18歲～未滿70歲）</SelectItem>
                <SelectItem value="banana">長者（滿70歲～未滿80歲）</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="flex scroll-m-20 items-center gap-2 text-xl font-semibold tracking-tight">
            旅遊期間(保險期間)
            <Popover>
              <PopoverTrigger asChild>
                <CircleAlert
                  className="h-5 w-5 stroke-2
                  text-yellow-300
                "
                />
              </PopoverTrigger>
              <PopoverContent className="w-60 border border-yellow-300">
                <p>
                  旅行保險期間最長180天，一天以24小時計算，建議保險期間涵蓋「從家裡出發至機場返家止」，讓保障更周延。
                </p>
              </PopoverContent>
            </Popover>
          </h4>
          <DatePickerWithRange date={date} setDate={setDate} />
          <Select onValueChange={(value) => setHour(value)}>
            <SelectTrigger>
              <SelectValue placeholder="請選擇時間" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>請選擇時間</SelectLabel>
                {HOURS.map((hour, index) => (
                  <SelectItem key={index} value={hour}>
                    {hour}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            活動代碼(非必填)
          </h4>
          <Input placeholder="請輸入活動代碼" />
        </div>
        <Dialog onOpenChange={isDateRangeValid}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 text-white">試算保費</Button>
          </DialogTrigger>
          <DialogContent className="w-80 rounded-md">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-center gap-2 text-amber-400">
                {reminderStep !== 2 ? (
                  <>
                    <AlarmClock />
                    <p>提醒</p>
                  </>
                ) : (
                  <p>保期確認</p>
                )}
              </DialogTitle>

              {reminderStep === 0 && (
                <div>
                  所選出發日：{date?.from && format(date.from, "LLL dd, y")}{" "}
                  為一個月後，目前無法進行投保，是否開啟 Reminder 功能
                </div>
              )}
              {reminderStep === 1 && (
                <>
                  <div className="mb-2">
                    目前所選出發日為：
                    {date?.from && format(date.from, "LLL dd, y")}{" "}
                    將於可投保時寄信至下方 email
                  </div>
                  <Input type="email" placeholder="Email" />
                </>
              )}
              {reminderStep === 2 && (
                <>
                  <div className="mb-2">本次投保的保險期間為 :</div>
                  <div className="mb-2">
                    [{date?.from && format(date.from, "LLL dd, y")} {hour} ~{" "}
                    {date?.to && format(date.to, "LLL dd, y")} {hour} 共{" "}
                    {date?.to &&
                      date?.from &&
                      differenceInDays(date?.to, date?.from)}{" "}
                    天]
                  </div>
                  <div className="mb-2">請再檢視保期是否完整</div>
                </>
              )}
            </DialogHeader>
            <DialogFooter className="flex flex-row items-center gap-2">
              {reminderStep === 0 && (
                <Button
                  className="w-full bg-blue-600"
                  type="button"
                  onClick={() => setReminderStep(1)}
                >
                  開啟
                </Button>
              )}

              {reminderStep === 1 && (
                <Button
                  className="w-full bg-blue-600"
                  type="button"
                  onClick={() => {
                    toast({
                      title: "成功開啟提醒功能",
                      description: "將於可投保時寄信至 email",
                    });
                    setReminderStep(2);
                  }}
                >
                  開啟
                </Button>
              )}
              {reminderStep === 2 && (
                <Button
                  className="w-full bg-blue-600"
                  type="button"
                  onClick={() => {
                    navigate({
                      to: "/hi-fi/step-1-1",
                    });
                  }}
                >
                  確認
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Toaster />
    </div>
  );
}
