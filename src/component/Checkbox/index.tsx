import { useEffect, useState } from 'react';
import Icon from '../Icon';

interface CheckboxProps {
  selected?: boolean;
  onClick?: (val: boolean) => void;
}

export default function Checkbox(props: CheckboxProps) {
  const [val, setVal] = useState(props.selected);

  const handleClick = () => {
    setVal(!val);
    props.onClick?.(!val);
  };

  useEffect(() => {
    setVal(props.selected);
  }, [props.selected]);

  return (
    <Icon
      className="cursor-pointer"
      name={val ? 'CheckboxChecked' : 'checkbox'}
      onClick={handleClick}
    />
  );
}
