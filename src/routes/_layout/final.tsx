import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SquareArrowOutUpRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const feedbacks = [
  {
    issue:
      "因從未使用過網路投保，使用者擔心選錯不適合自己的方案。後來，使用者反映在Lofi新增的功能“不知道多少保費適合你?”，其圖表不夠直觀且重複顯示",
    explanation: "因從未使用過網路投保，想要知道其他人都選擇哪些價格與內容",
    solution: "將不同保險的圖表做出區隔並將資訊圖更改為易於理解的柱狀圖",
  },
  {
    issue: "接近五成的使用者反映在保單加購時選擇“確認加購”後畫面不會顯示更動",
    explanation: "功能問題",
    solution: "如果用戶決定加購將改變顏色並顯示出所有訊息",
  },
  {
    issue: "三成的使用者反映有些輸入框不確定是下拉式選單或手動輸入",
    explanation: "按鈕UI不清楚",
    solution: "在每個欄位上新增按鈕細節讓使用者能更直觀的操作",
  },
  {
    issue:
      "不到兩成的使用者反映顯示框的設計看起來可以做更改或是輸入但實際上卻不能操作",
    explanation: "UI過於相似導致操作方式與使用者的預期不符",
    solution: "移除原本輸入框的樣式，直接顯示資訊",
  },
  {
    issue: "使用者想要選擇的日期是灰色的且無法點擊，致此使用者卡住",
    explanation:
      "但沒有error messages 或一個月後的天數還不能投保的資訊所以使用者會放棄",
    solution:
      "變成所有日期都可以選擇，但如果日期還離太遠，會跳出“提醒”之pop-up通知，將可投保時寄信至自訂Email",
  },
  {
    issue: "使用者還沒開始填寫就覺得註冊帳號的頁面很長，會太費時",
    explanation: "使用者在剛開始不確定註冊帳號+投保大概會需要花多少時間",
    solution:
      "加入預估投保流程至付費大約需要花多少時間，加入米符號，代表為必填資料，減少註冊帳號時需填的資料，變成有會員要開啟投保後才需要填寫",
  },
  {
    issue: "使用者想要使用線上付費方法 覺得要手動輸入信用卡很麻煩",
    explanation: "沒有digital payment 付款方式",
    solution:
      "加入Apple Pay, LinePay 功能。除了手動輸入，加入相機掃描信用卡功能",
  },
  {
    issue:
      "使用者卡在同意聲明告知事項。他沒有發現需要滑動裡面內容，只是一直點擊兩個按鈕都沒有反應",
    explanation: "網站指令和資訊不足/不顯眼+清楚",
    solution: "將“請滑動”那句變更明顯，並建立會往下移動的箭頭",
  },
];
export const Route = createFileRoute("/_layout/final")({
  component: FinalComponent,
});

function FinalComponent() {
  const navigate = useNavigate();
  return (
    <main className="relative flex min-h-screen gap-6 px-2 pb-40 pt-20 text-white md:px-40">
      <div className="flex flex-col">
        <div className="flex items-center">
          <h1 className="mr-auto scroll-m-20 text-4xl font-extrabold uppercase tracking-tight lg:text-5xl">
            Final Report
          </h1>
        </div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Hi-Fi Prototype
        </h2>
        <Button
          className="mt-7 w-max bg-green-400 text-[#232323] hover:bg-green-600/90"
          onClick={() => {
            navigate({
              to: "/hi-fi/step-1",
            });
          }}
        >
          Visit Hi-Fi Prototype
          <SquareArrowOutUpRight className="ml-2 h-6 w-6" />
        </Button>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We generate a Hi-Fi prototype based on the Lo-fi prototype and revise
          the design based on the feedback from the participants.
        </p>
        <Table className="mt-10 rounded-lg border-2 border-gray-200">
          <TableCaption>
            Feedback and solutions from user observations
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-green-400">
              <TableHead className=" text-black">
                Observed issue/pain points/ user feedback
              </TableHead>
              <TableHead className=" text-black">
                Briefly introduce or explain the issue
              </TableHead>
              <TableHead className=" text-black">
                Developed solutions and revisions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feedbacks.map((feedback, index) => (
              <TableRow key={index} className="text-white">
                <TableCell className="font-medium">{feedback.issue}</TableCell>
                <TableCell>{feedback.explanation}</TableCell>
                <TableCell>{feedback.solution}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>End of feedback list</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </main>
  );
}
