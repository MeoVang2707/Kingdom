import React from 'react';
import { useToggle } from '@umijs/hooks';
import './style.scss';
import Icon from '../Icon';
interface InputProps {
  className?: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'number' | 'hidden';
  placeholder?: string;
  onClick?: () => void;
  label?: string;
  min?: number;
  max?: number;
  maxLength?: number;
  suffix?: React.ReactNode;
  pattern?: string | undefined;
  classNameInput?: string;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef(
  (props: InputProps & React.HTMLProps<HTMLInputElement>, ref: any) => {
    const {
      className,
      disabled = false,
      type = 'text',
      onClick,
      maxLength,
      suffix,
      classNameInput,
      rightIcon,
      ...rest
    } = props;
    const inputRef = (ref as any) || React.createRef<HTMLInputElement>();

    const { state: isVisibleEye, toggle: toggleEye } = useToggle(false);

    const isTypePassword: boolean = type === 'password';

    const handleClick = () => {
      if (disabled) {
        return;
      }

      onClick && onClick();
    };

    const handleBlur = () => {
      if (type === 'number') {
        const inputValue: number = inputRef?.current?.value;

        const minNumber: number = (rest as any)?.min;
        const maxNumber: number = (rest as any)?.max;

        if (minNumber && minNumber > inputValue) {
          // Set number value to min if value less than min number
          inputRef.current.value = minNumber;
        }

        if (maxNumber && maxNumber < inputValue) {
          // Set number value to max if value greater than max number
          inputRef.current.value = maxNumber;
        }
      }
    };

    const srcEyePassword = (): string => {
      let src: string = 'eye';

      if (isVisibleEye) {
        src = 'eye_hide';
      }

      return src;
    };

    const handleToggleEyes = () => toggleEye();

    const implicitType = (): InputProps['type'] => {
      if (isTypePassword) {
        if (isVisibleEye) {
          return 'text';
        }

        return 'password';
      }

      return type;
    };

    const blockInvalidCharNumber: string[] = ['e', 'E', '+', '-'];

    const onKeyDown = (event: React.KeyboardEvent) => {
      if (type === 'number') {
        const isBlockChar: boolean = blockInvalidCharNumber.includes(event.key);

        if (isBlockChar) {
          return event.preventDefault();
        }
      }
    };

    return (
      <div className={`relative ${className}`}>
        <input
          ref={inputRef}
          type={implicitType()}
          disabled={disabled}
          className={`inputGeneral placeholder:text-semibold ${classNameInput}`}
          onClick={handleClick}
          onBlur={handleBlur}
          maxLength={maxLength}
          onKeyDown={onKeyDown}
          autoComplete="off"
          {...rest}
        />

        {isTypePassword && !disabled && (
          <div className="absolute h-full right-4 top-0 flex items-center">
            <Icon
              className="cursor-pointer"
              name={srcEyePassword()}
              onClick={handleToggleEyes}
            />
          </div>
        )}

        {rightIcon && (
          <div className="absolute h-full right-4 top-0 flex items-center">
            {rightIcon}
          </div>
        )}
      </div>
    );
  },
);

export default React.memo(Input);
