import { useEffect, useState } from 'react';
import Icon from '../Icon';

interface RadioButtonProps {
  selected?: boolean;
  onClick?: (val: boolean) => void;
}

export default function RadioButton(props: RadioButtonProps) {
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
      name={val ? 'radio_button_checked' : 'radio_button'}
      onClick={handleClick}
    />
  );
}
