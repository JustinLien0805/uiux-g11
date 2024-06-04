import { createFileRoute } from "@tanstack/react-router";
import Webcam from "react-webcam";
export const Route = createFileRoute("/hi-fi/_hi-fi/step-5")({
  component: HifiComponent,
});
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Apple, Camera } from "lucide-react";
import { useState, useRef } from "react";

function HifiComponent() {
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  // const capture = useCallback(() => {
  //   const imageSrc = webcamRef.current?.getScreenshot();
  // }, [webcamRef]);
  return (
    <div className="rounded-lg p-4">
      <h2 className="mb-4 text-center text-xl font-bold">繳費</h2>
      <Card>
        <CardHeader className="gap-6">
          <CardTitle className="border-l-4 border-blue-600 pl-2 font-semibold text-blue-600">繳費資料</CardTitle>
          <p className="">總保費：$〇〇〇</p>
          <p className="">付款人姓名：〇〇〇</p>
          <p className="">身分證字號：〇〇〇〇〇〇〇〇〇〇</p>
        </CardHeader>
        <CardHeader>
          <CardTitle className="border-l-4 border-blue-600 pl-2 font-semibold text-blue-600">
            繳費方式
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
            <div>
              <RadioGroupItem value="card" id="card" className="peer sr-only" />
              <Label
                htmlFor="card"
                className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-600 [&:has([data-state=checked])]:border-blue-600 flex flex-col items-center justify-between rounded-md border-2 p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mb-3 h-6 w-6"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
                Card
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="paypal"
                id="paypal"
                className="peer sr-only"
              />
              <Label
                htmlFor="paypal"
                className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-600 [&:has([data-state=checked])]:border-blue-600 flex flex-col items-center justify-between rounded-md border-2 px-2 py-4"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/42/Line_pay_logo.svg"
                  alt=""
                  className="mb-3 h-6"
                />
                LINE Pay
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="apple"
                id="apple"
                className="peer sr-only"
              />
              <Label
                htmlFor="apple"
                className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-600 [&:has([data-state=checked])]:border-blue-600 flex flex-col items-center justify-between rounded-md border-2 p-4"
              >
                <Apple className="mb-3 h-6 w-6" />
                Apple
              </Label>
            </div>
          </RadioGroup>
          {showCamera && (
            <div className="grid gap-2">
              <Webcam
                mirrored={true}
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
              />
              <div className="flex items-center gap-4">
                <Button
                  className="w-full"
                  onClick={() => {
                    // capture();
                    setShowCamera(false);
                  }}
                >
                  掃描
                </Button>
                <Button
                  className="w-full"
                  onClick={() => {
                    setShowCamera(false);
                  }}
                >
                  關閉相機
                </Button>
              </div>
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="number" className="flex items-center gap-2">
              卡號{" "}
              <Camera
                onClick={() => {
                  setShowCamera(true);
                }}
              />
            </Label>
            <Input id="number" placeholder="" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="month">有效日期</Label>
              <Select>
                <SelectTrigger id="month">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">January</SelectItem>
                  <SelectItem value="2">February</SelectItem>
                  <SelectItem value="3">March</SelectItem>
                  <SelectItem value="4">April</SelectItem>
                  <SelectItem value="5">May</SelectItem>
                  <SelectItem value="6">June</SelectItem>
                  <SelectItem value="7">July</SelectItem>
                  <SelectItem value="8">August</SelectItem>
                  <SelectItem value="9">September</SelectItem>
                  <SelectItem value="10">October</SelectItem>
                  <SelectItem value="11">November</SelectItem>
                  <SelectItem value="12">December</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2 self-end">
              <Select>
                <SelectTrigger id="year">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => (
                    <SelectItem
                      key={i}
                      value={`${new Date().getFullYear() + i}`}
                    >
                      {new Date().getFullYear() + i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cvc">安全碼</Label>
            <Input id="cvc" placeholder="CVC" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-600">確認</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
