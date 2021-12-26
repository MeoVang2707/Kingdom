import { useBoolean, useClickAway } from "@umijs/hooks";
import Select, { Option, SelectProps as SelectPropsDefault } from "rc-select";
import "./index.scss";
import "rc-select/assets/index.less";
import React, { useEffect, useState } from "react";

export interface OptionSelect {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}
interface SelectProps {
  options?: OptionSelect[];
  className?: string;
  placeholder?: string;
  classNameDropdown?: string;
  icon?: string;
  direction?: "ltr" | "rtl";
  dropdownRender?: any;
  open?: boolean;
}

const RCSelect = React.forwardRef(
  (props: SelectProps & SelectPropsDefault, ref: any) => {
    const { options = [], className, classNameDropdown, icon, ...rest } = props;

    const { state, setFalse, setTrue } = useBoolean(false);
    const [val, setVal] = useState(rest.value);

    useEffect(() => {
      setVal(rest.value);
    }, [rest.value]);

    const onChange = (newVal: SelectPropsDefault["value"]) => {
      // console.log('aaaaaaa', a);
      setVal(newVal);

      // onChange()
    };

    const divRef: any = useClickAway(() => {
      if (state) setFalse();
    });

    const renderInputIcon = () => {
      let src: string = "/assets/images/arrow_down.svg";

      if (val) {
        src = "/assets/images/arrow_down_white.svg";
      }

      return <img src={src} alt="" />;
    };

    return (
      <div ref={divRef}>
        <Select
          // className={cls([
          //   styles.rcselect,
          //   val ? styles.rcselect_has_value : '',
          //   className,
          // ])}
          // dropdownClassName={cls([styles.menu, classNameDropdown])}
          className={`rcselect ${val ? "rcselect_has_value" : ""} ${className}`}
          dropdownClassName={`rcselectMenu ${classNameDropdown}`}
          inputIcon={renderInputIcon()}
          onClick={setTrue}
          animation="slide-up"
          showArrow
          onChange={onChange}
          // open
          {...rest}
        >
          {options.map(
            ({ label, value, icon }: OptionSelect, index: number) => {
              return (
                <Option value={value} key={`${label}-${value}-${index}`}>
                  {icon}
                  {label}
                </Option>
              );
            }
          )}
        </Select>
      </div>
    );
  }
);

export default React.memo(RCSelect);
