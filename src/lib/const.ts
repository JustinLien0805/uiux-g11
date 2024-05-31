import { Option } from "@/components/multi-select";
export const OPTIONS: Option[] = [
  {
    label: "日本",
    value: "日本",
    group: "亞洲",
  },
  {
    label: "韓國",
    value: "韓國",
    group: "亞洲",
  },
  {
    label: "美國",
    value: "美國",
    group: "美洲",
  },
  {
    label: "英國",
    value: "英國",
    group: "歐洲",
  },
  {
    label: "法國",
    value: "法國",
    group: "歐洲",
  },
  {
    label: "德國",
    value: "德國",
    group: "歐洲",
  },
  {
    label: "義大利",
    value: "義大利",
    group: "歐洲",
  },
  {
    label: "澳洲",
    value: "澳洲",
    group: "大洋洲",
  },
  {
    label: "紐西蘭",
    value: "紐西蘭",
    group: "大洋洲",
  },
  {
    label: "南非",
    value: "南非",
    group: "非洲",
  },
  {
    label: "埃及",
    value: "埃及",
    group: "非洲",
  },
  {
    label: "肯亞",
    value: "肯亞",
    group: "非洲",
  },
  {
    label: "馬達加斯加",
    value: "馬達加斯加",
    group: "非洲",
  },
  {
    label: "摩洛哥",
    value: "摩洛哥",
    group: "非洲",
  },
  {
    label: "印度",
    value: "印度",
    group: "亞洲",
  },
  {
    label: "泰國",
    value: "泰國",
    group: "亞洲",
  },
  {
    label: "新加坡",
    value: "新加坡",
    group: "亞洲",
  },
];

export const HOURS = Array.from(
  { length: 24 },
  (_, i) =>
    // make it like 01:00, 02:00, 03:00, ...
    i.toString().padStart(2, "0") + ":00",
);
export const INSURANCE_CASE = [
  {
    category: "國外旅遊不便險",
    items: [
      {
        name: "行李延誤保險",
        price: "定額 6,000",
      },
      {
        name: "行李損失保險",
        price: "定額 6,000",
      },
      {
        name: "旅行文件損失保險",
        price: "定額 6,000",
      },
      {
        name: "旅程取消保險",
        price: "限額 1萬",
      },
      {
        name: "旅程更改保險",
        price: "限額 1萬",
      },
    ],
  },
  {
    category: "其他費用補償保險",
    items: [
      {
        name: "食物中毒慰問保險金",
        price: "定額 3,000",
      },
      {
        name: "旅行期間居家竊盜保險",
        price: "限額 5萬",
      },
      {
        name: "現金竊盜損失保險",
        price: "限額 3,000",
      },
      {
        name: "信用卡盜用損失保險",
        price: "限額 5萬",
      },
      {
        name: "班機改降補償保險",
        price: "定額 2,000",
      },
      {
        name: "劫持事故補償保險",
        price: "定額 10萬",
      },
    ],
  },
  {
    category: "海外突發疾病險(限0-65歲)",
    items: [
      {
        name: "住院醫療費用保險金",
        price: "50萬",
      },
      {
        name: "門診醫療費用保險金",
        price: "5,000",
      },
      {
        name: "急診醫療費用保險金",
        price: "5,000",
      },
    ],
  },
  {
    category: "緊急醫療救援費用保險",
    items: [
      {
        name: "緊急救援費用保險",
        price: "一般國家 60萬 / 申根國家 60萬或150萬",
      },
    ],
  },
];
