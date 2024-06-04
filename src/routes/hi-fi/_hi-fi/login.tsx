import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
export const Route = createFileRoute("/hi-fi/_hi-fi/login")({
  component: LoginComponent,
});

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function LoginComponent() {
  const navigate = useNavigate();
  return (
    <div className="mt-20 flex items-center justify-center">
      <Card className="w-[350px] shadow-md">
        <CardHeader>
          <CardTitle>會員登入</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">帳號</Label>
                <Input placeholder="身分證號/居留證號" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="flex w-full gap-4">
            <Button variant="outline" className="w-full">
              返回
            </Button>
            <Button
              className="w-full bg-blue-600"
              onClick={() => {
                navigate({ to: "/hi-fi/verify" });
              }}
            >
              登入
            </Button>
          </div>
          <Button
            variant="link"
            className="mb-4 justify-self-center text-center underline"
            onClick={() => {
              navigate({ to: "/hi-fi/sign-up" });
            }}
          >
            還不是會員嗎？ 立即註冊
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
