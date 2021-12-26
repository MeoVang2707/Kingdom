import Select from "src/component/Select";
import React from "react";

const options1 = [
  { value: "all", label: "All" },
  { value: "sale", label: "For sale" },
  { value: "notSale", label: "Not for sale" },
];

const options2 = [
  { value: "lowesr", label: "Lowest Price" },
  { value: "highest", label: "Hightest Price" },
  { value: "lastesr", label: "Lastest" },
];

// interface FiltersProps {
//   hidePrice?: boolean;
//   hideAllCheckboxes?: boolean;
//   hideSortBy?: boolean;
// }

const Filters = () => {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <div>
        <Select options={options1} defaultValue="sale" />
      </div>
      <div>
        <Select options={options2} placeholder="Sort by" />
      </div>
    </div>
  );
};

export default React.memo(Filters);
