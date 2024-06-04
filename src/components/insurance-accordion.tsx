import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CircleHelp } from "lucide-react";

type CaseType = {
  category: string;
  items: { name: string; price: string }[];
};

type Props = {
  insuranceCase: CaseType;
  isPlan: boolean;
  openExample: () => void;
};

export const InsuranceAccordion = ({
  insuranceCase,
  isPlan,
  openExample,
}: Props) => {
  const [added, setAdded] = useState<boolean>(false);
  const splitPrice = (price: string) => {
    if (price.length > 10) {
      const mid = Math.ceil(price.length / 2);
      return [price.slice(0, mid), price.slice(mid)];
    }
    return [price];
  };

  return (
    <Accordion
      type="single"
      collapsible
      className={`rounded-lg ${added ? "border-2 border-green-500" : ""} border p-4 shadow-md`}
    >
      <AccordionItem value={insuranceCase.category}>
        <AccordionTrigger>
          <div className="flex items-center text-blue-600">
            {insuranceCase.category}{" "}
            <CircleHelp
              onClick={openExample}
              className="ml-2 text-orange-500"
            />
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {isPlan && (
              <li className="flex items-center justify-between">
                <p>班機延誤保險(至少4小時)</p>
                <Select defaultValue="500">
                  <SelectTrigger className="w-2/5">
                    <SelectValue placeholder="請選擇身份與年齡" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="500">定額 6,000</SelectItem>
                      <SelectItem value="600">限額 30,000</SelectItem>
                      <SelectItem value="700">限額 50,000</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
            )}
            {insuranceCase.items.map((subItem, subIndex) => (
              <li key={subIndex} className="flex items-center justify-between">
                <p>{subItem.name}</p>
                <div className="flex flex-col">
                  {splitPrice(subItem.price).map((part, index) => (
                    <p key={index}>{part}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <Button
            className="w-full p-2 text-lg"
            variant={added ? "destructive" : "success"}
            onClick={() => {
              setAdded(!added);
            }}
          >
            {added ? "移除保險" : "加購保險"}
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};