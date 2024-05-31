import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_hi-fi")({
  component: HwComponent,
});

function HwComponent() {
  return (
    <div className="min-h-screen relative bg-[#f3f3f3]">
      <header className="mb-2">
        <h2 className="scroll-m-20 border-b p-2 text-center text-2xl font-semibold tracking-tight first:mt-0">
          新安東京海上產險
        </h2>
      </header>
      <div className="flex w-full justify-between p-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border text-xl">
          1
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-full border text-xl">
          2
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-full border text-xl">
          3
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-full border text-xl">
          4
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-full border text-xl">
          5
        </div>
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
