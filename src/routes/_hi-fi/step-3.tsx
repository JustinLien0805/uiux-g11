import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_hi-fi/step-3")({
  component: HifiComponent,
});

import { Button } from "@/components/ui/button";
import { ToggleSwitch } from "@/components/toggle-switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function HifiComponent() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-center text-lg font-bold">線上投保注意事項</h2>
      <div>
        <label className="mb-2 block font-bold">
          1. 過去一年內要保人是否居住於中華民國境外超過半年以上？*
        </label>
        <ToggleSwitch />
      </div>

      <div>
        <label className="mb-2 block font-bold">
          2.
          要保人或任一被保險人是現任（或曾任）國內外政府或國際組織重要政治性職務人士？*
        </label>
        <ToggleSwitch />
      </div>

      <div>
        <label className="mb-2 block font-bold">
          3.
          任一被保險人是否因精神障礙或心智缺陷，會申請法院監護宣告且尚未撤銷者？*
        </label>
        <ToggleSwitch />
      </div>

      <div>
        <label className="mb-2 block font-bold">
          4. 任一被保險人是否已投保其他公司傷害醫療實支實付型商品？*
        </label>
        <ToggleSwitch />
      </div>

      <div>
        <label className="mb-2 block font-bold">
          5. 請填選本次保費的支付來源？*
        </label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="請選擇支付來源" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="500">薪資</SelectItem>
              <SelectItem value="600">投資收入</SelectItem>
              <SelectItem value="700">存款</SelectItem>
              <SelectItem value="800">退休金</SelectItem>
              <SelectItem value="900">營業收入</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="mb-2 block font-bold">6. 被保險人年收入？*</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="請選擇年收入狀況" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="500">50萬以下</SelectItem>
              <SelectItem value="600">51萬~100萬</SelectItem>
              <SelectItem value="700">101萬~200萬</SelectItem>
              <SelectItem value="800">200萬以上</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="mb-2 block font-bold">
          7. 被保險人之家庭年收入？*
        </label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="請選擇年收入狀況" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="500">50萬以下</SelectItem>
              <SelectItem value="600">51萬~100萬</SelectItem>
              <SelectItem value="700">101萬~200萬</SelectItem>
              <SelectItem value="800">200萬以上</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="mb-2 block font-bold">
          8. 手機 &
          Email確認：經系統驗證，您填入（的手機號碼或Email）會經與他人重複，請選擇您與資料持有人的關係
          *
        </label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="請選擇年收入狀況" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="500">
                持有人為我的配偶或三親等內親屬
              </SelectItem>
              <SelectItem value="600">持有人為我本人</SelectItem>
              <SelectItem value="700">
                我不是本人也不是持有人的三親等內親屬
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-4">
        <Button className="w-full">返回</Button>
        <Button className="w-full">確認</Button>
      </div>
    </div>
  );
}
