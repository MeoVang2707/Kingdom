import React, { useState } from "react";
// import styles from "./index.less";
// import { Link, useIntl } from "umi";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [activeKey, setActiveKey] = useState("");

  const { pathname } = useLocation();
  console.log("pathname", pathname);
  console.log("activeKey", activeKey);

  const menus: any[] = [
    { label: "Metrics", path: "/", keys: [""] },
    {
      label: "Marketplace",
      path: "/marketplace",
      keys: ["marketplace", "login"],
    },
  ];

  React.useEffect(() => {
    const getPath: string = pathname.substring(1);
    setActiveKey(getPath.split("/")[0] || "");
  }, [pathname]);

  return (
    <ul className="flex items-center text-primary-100">
      {menus.map((menu) => {
        const isActive = menu.keys.findIndex(
          (item: string) => item === activeKey
        );
        console.log("isActive", isActive);

        return (
          <Link
            key={menu.label}
            className={`font-bold  ml-8 ${
              isActive >= 0 ? "text-accent-500" : ""
            }`}
            to={menu.path}
          >
            {menu.label}
          </Link>
        );
      })}
    </ul>
  );
};

export default React.memo(Navigation);
