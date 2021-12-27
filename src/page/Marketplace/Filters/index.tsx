import { SelectProps } from 'rc-select';
import React from 'react';
import Select from 'src/component/Select';
import { FilterLabelEnum, SortLabelEnum } from 'src/constant';
import { FilterValue, FilterValueEnum, SortValueEnum } from 'src/constant/Type';

const options1 = [
  { value: FilterValueEnum.ALL, label: FilterLabelEnum.ALL },
  { value: FilterValueEnum.SALE, label: FilterLabelEnum.SALE },
  { value: FilterValueEnum.NOTSALE, label: FilterLabelEnum.NOTSALE },
];

const options2 = [
  { value: SortValueEnum.LOWEST, label: SortLabelEnum.LOWEST },
  { value: SortValueEnum.HIGHEST, label: SortLabelEnum.HIGHEST },
  { value: SortValueEnum.LASTEST, label: SortLabelEnum.LASTEST },
];

interface FiltersProps {
  filterPrice?: FilterValue;
  handleChangeFilter?: (val: string) => void;
  handleChangeSort?: (val: string) => void;
}

const Filters = ({
  filterPrice,
  handleChangeFilter,
  handleChangeSort,
}: FiltersProps) => {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <div>
        <Select
          options={options1}
          defaultValue={filterPrice}
          onChange={handleChangeFilter}
        />
      </div>
      <div>
        <Select
          options={options2}
          placeholder="Sort by"
          onChange={handleChangeSort}
        />
      </div>
    </div>
  );
};

export default React.memo(Filters);
