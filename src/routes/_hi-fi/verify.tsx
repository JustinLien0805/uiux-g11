import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
export const Route = createFileRoute("/_hi-fi/verify")({
  component: VerifyComponent,
});
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
function VerifyComponent() {
  const navigate = useNavigate();
  return (
    <div className="mt-20 flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>輸入驗證碼</CardTitle>
          <CardDescription>
            已發送至您手機 0986***700 以及信箱 69********@gmail.com
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex items-center">
                <Label className="mr-4">RJQ - </Label>
                <Input placeholder="請輸入六位數驗證碼" className="w-4/5" />
              </div>
            </div>
          </form>
          <p className="mb-4 text-center">剩餘時間 2:55</p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            className="w-full"
            onClick={() => {
              navigate({
                to: "/step-2",
              });
            }}
          >
            確定
          </Button>
          <Button
            className="w-full"
            onClick={() => {
              navigate({
                to: "/step-2",
              });
            }}
          >
            重新發送
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
