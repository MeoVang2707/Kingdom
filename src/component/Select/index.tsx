import { useBoolean, useClickAway } from '@umijs/hooks';
import Select, { Option, SelectProps as SelectPropsDefault } from 'rc-select';
import './index.scss';
import 'rc-select/assets/index.less';
import React, { useEffect, useState } from 'react';
import Icon from '../Icon';

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
  direction?: 'ltr' | 'rtl';
  dropdownRender?: any;
  open?: boolean;
  onChange?: (val: string) => void;
  defaultValue?: string;
  value?: string;
}

const RCSelect = React.forwardRef(
  (props: SelectProps, ref: any) => {
    const {
      options = [],
      className,
      classNameDropdown,
      icon,
      onChange,
      ...rest
    } = props;

    const { state, setFalse, setTrue } = useBoolean(false);
    const [val, setVal] = useState(rest.value);

    useEffect(() => {
      setVal(rest.value);
    }, [rest.value]);

    const handleChange = (newVal: SelectPropsDefault['value']) => {
      setVal(newVal as string);
      onChange?.(newVal as string);
    };

    const divRef: any = useClickAway(() => {
      if (state) setFalse();
    });

    const renderInputIcon = () => {
      let src: string = 'arrow_down';

      if (val) {
        src = 'arrow_down_white';
      }

      return <Icon name={src} />;
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
          className={`rcselect ${val ? 'rcselect_has_value' : ''} ${className}`}
          dropdownClassName={`rcselectMenu ${classNameDropdown}`}
          inputIcon={renderInputIcon()}
          onClick={setTrue}
          animation="slide-up"
          showArrow
          onChange={handleChange}
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
            },
          )}
        </Select>
      </div>
    );
  },
);

export default React.memo(RCSelect);
