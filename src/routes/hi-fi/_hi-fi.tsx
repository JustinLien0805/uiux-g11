import {
  createFileRoute,
  Outlet,
  useRouterState,
  Link,
  useNavigate,
} from "@tanstack/react-router";

export const Route = createFileRoute("/hi-fi/_hi-fi")({
  component: HwComponent,
});

function HwComponent() {
  const router = useRouterState();
  const navigate = useNavigate();
  const STEPS = [
    {
      id: 1,
      step: "step-1",
      title: "保費試算",
    },
    {
      id: 2,
      step: "step-2",
      title: "填寫資料",
    },
    {
      id: 3,
      step: "step-3",
      title: "告知事項",
    },
    {
      id: 4,
      step: "step-4",
      title: "確認資料",
    },
    {
      id: 5,
      step: "step-5",
      title: "繳費",
    },
  ];
  return (
    <div className="relative min-h-screen bg-[#f3f3f3]">
      <header className="mb-2">
        <h2
          onClick={() => {
            navigate({
              to: "/final",
            });
          }}
          className="scroll-m-20 bg-blue-600 p-2 text-center text-2xl font-semibold tracking-tight text-white first:mt-0"
        >
          新安東京海上產險
        </h2>
      </header>
      <div className="flex w-full justify-between p-4">
        {STEPS.map((step) => (
          <Link
            key={step.id}
            className="flex flex-col items-center gap-2 first:border-amber-400"
            to={"/hi-fi/" + step.step}
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${
                router.location.pathname.includes(step.step)
                  ? "border-amber-400 text-amber-400"
                  : "border-blue-600"
              } text-xl`}
            >
              {step.id}
            </div>
            <div className="text-center">{step.title}</div>
          </Link>
        ))}
      </div>
      <Outlet />

      <footer className="mt-20 gap-2 border-t p-4 text-[#979797]">
        <h4 className="scroll-m-20 border-b text-lg tracking-tight">
          官網首頁
        </h4>
        <h4 className="scroll-m-20 border-b text-lg tracking-tight">
          理賠服務
        </h4>
        <h4 className="scroll-m-20 border-b text-lg tracking-tight">
          服務據點
        </h4>
        <h4 className="scroll-m-20 border-b text-lg tracking-tight">
          商品條款
        </h4>
        <h4 className="scroll-m-20 border-b text-lg tracking-tight">
          聲明事項
        </h4>
        <h4 className="scroll-m-20 border-b text-lg tracking-tight">
          金融監督管理委員會
        </h4>
        <h4 className="scroll-m-20 border-b text-lg tracking-tight">
          消費者保護
        </h4>
        <h4 className="scroll-m-20 border-b text-lg tracking-tight">
          保險業經營電子商務自律規範 24小時客服、道路救援專線：0800-050-119
          網路服務專線：0800-366-168 (服務時間：8:30-17:30 國定假日除外)
          地址：104 台灣台北市中山區南京東路三段130號8-13樓
          建議瀏覽器：Chrome10、Safari16、Edge109以上版本
        </h4>
      </footer>
    </div>
  );
}
