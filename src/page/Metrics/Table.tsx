import MainTab from "src/component/Tabs/MainTab";
// import Tab from '@/layouts/MainLayout/TabHeader/Tab';
import { useState } from "react";
import { MainObject, MainObjectEnum } from "src/constant/Type";
import Item from "./Item";

interface TableProps {
  title: string;
  type: "list" | "sold";
}

export default function Table({ title, type = "list" }: TableProps) {
  const [selected, setSelected] = useState(MainObjectEnum.CHARACTER);
  const handleClickItem = (val: MainObject) => {
    // history.push(`${pathname}?tab=${val}`);
    // console.log();
    setSelected(val);
  };

  return (
    <div>
      <div className="text-white text-xl font-semibold">{title}</div>
      <MainTab
        className="flex justify-center border border-primary-100 py-4 px-2 rounded-lg mt-4"
        onClick={handleClickItem}
        selected={selected}
      />

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
        return <Item type={selected} key={item} isSold={type === "sold"} />;
      })}
    </div>
  );
}
