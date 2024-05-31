import { useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center justify-end space-x-2">
      <Label>{isOn ? "是" : "否"}</Label>
      <Switch checked={isOn} onCheckedChange={handleToggle} />
    </div>
  );
};
