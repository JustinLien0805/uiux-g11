import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { useNavigate } from "@tanstack/react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InsuranceAccordion } from "@/components/insurance-accordion";
import { BarChart3, CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSURANCE_CASE } from "@/lib/const";
import graph1 from "../../../assets/graph1.png";
import graph2 from "../../../assets/graph2.png";
import example from "../../../assets/example.png";
import { useState } from "react";
export const Route = createFileRoute("/hi-fi/_hi-fi/step-1-1")({
  component: HifiComponent,
});

function HifiComponent() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const openExample = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="flex flex-col gap-6 px-4 pt-8">
        <h2 className="text-center text-xl font-bold">線上投保注意事項</h2>
        <div className="space-y-2 rounded-lg bg-white px-4 py-3 shadow-md">
          <h2 className="border-l-4 border-blue-600 pl-2 text-lg font-semibold text-blue-600">
            旅遊行程
          </h2>
          <p>旅遊國家: 日本</p>
          <p>旅遊期間: 2024-05-01 23:00 ~ 2024-05-18 23:00，共17天</p>
        </div>
        <div className="space-y-4 rounded-lg bg-white px-4 py-3 shadow-md">
          <h2 className="border-l-4 border-blue-600 pl-2 text-lg font-semibold text-blue-600">
            選擇旅平險保障
          </h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mb-2 w-full bg-amber-400 p-2 text-sm text-black">
                <BarChart3 className="mr-2" />
                不知道多少保費適合你嗎?
              </Button>
            </DialogTrigger>
            <DialogContent className="w-96 rounded-md">
              <DialogHeader>
                <DialogTitle>意外死亡及失能</DialogTitle>
                <DialogDescription>
                  y-axis: 人數百分比 x-axis: 保費
                  <img src={graph1} />
                </DialogDescription>
                <DialogTitle>傷害醫療</DialogTitle>
                <DialogDescription>
                  y-axis: 人數百分比 x-axis: 保費
                  <img src={graph1} />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div className="mb-4">
            <label className="mb-2 flex items-center">
              意外死亡及失能{" "}
              <CircleHelp
                onClick={openExample}
                className="ml-2 text-orange-500"
              />
            </label>
            <Select defaultValue="1000">
              <SelectTrigger>
                <SelectValue placeholder="請選擇身份與年齡" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="500">500萬</SelectItem>
                  <SelectItem value="600">600萬</SelectItem>
                  <SelectItem value="700">700萬</SelectItem>
                  <SelectItem value="800">800萬</SelectItem>
                  <SelectItem value="900">900萬</SelectItem>
                  <SelectItem value="1000">1000萬</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <label className="mb-2 flex items-center">
              傷害醫療{" "}
              <CircleHelp
                onClick={openExample}
                className="ml-2 text-orange-500"
              />
            </label>
            <Select defaultValue="100">
              <SelectTrigger>
                <SelectValue placeholder="請選擇身份與年齡" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="50">50萬</SelectItem>
                  <SelectItem value="60">60萬</SelectItem>
                  <SelectItem value="70">70萬</SelectItem>
                  <SelectItem value="80">80萬</SelectItem>
                  <SelectItem value="90">90萬</SelectItem>
                  <SelectItem value="100">100萬</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <label className="mb-2 flex items-center">
              個人賠償責任 (每一事故自付額2500元)
              <CircleHelp
                onClick={openExample}
                className="ml-2 text-orange-500"
              />
            </label>
            <Input
              disabled
              className="h-12 w-full border p-2"
              value="體傷20萬/財損10萬/最高60萬"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-lg bg-white px-4 py-3 shadow-md">
          <h2 className="border-l-4 border-blue-600 pl-2 text-lg font-semibold text-blue-600">
            選擇旅遊不便險方案
          </h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mb-2 w-full bg-amber-400 p-2 text-sm text-black">
                <BarChart3 className="mr-2" />
                不知道什麼方案適合你嗎?
              </Button>
            </DialogTrigger>
            <DialogContent className="w-96 rounded-md">
              <DialogHeader>
                <DialogTitle>保險方案投保百分比</DialogTitle>
                <DialogDescription>
                  y-axis: 投保百分比 x-axis: 保險種類
                  <img src={graph2} />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <div className="flex w-full flex-col gap-4">
            {INSURANCE_CASE.map((insuranceCase, index) => (
              <InsuranceAccordion
                key={index}
                insuranceCase={insuranceCase}
                isPlan={index === 0}
                openExample={openExample}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Button className="mr-2 w-1/2 p-2 text-lg" variant="outline">
            返回
          </Button>
          <Button
            className="ml-2 w-1/2 bg-blue-600 p-2 text-lg"
            onClick={() => {
              navigate({
                to: "/hi-fi/login",
              });
            }}
          >
            立即投保
          </Button>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-blue-500 p-4 text-center text-white">
        總計保費：NT$ 1,500 / 1 人
      </div>
      <Dialog
        open={isOpen}
        onOpenChange={() => {
          setIsOpen(!isOpen);
        }}
      >
        <DialogContent className="w-96 rounded-md">
          <img src={example} />
        </DialogContent>
      </Dialog>
    </>
  );
}
