import React from 'react';
type variantType = 'fulfill' | 'outline' | undefined;

export interface ButtonProps {
  variant?: variantType;
  icon?: React.ReactNode;
  textClassName?: string;
  type?: 'button' | 'submit' | 'reset';
}

const getClassNameVariant = (val: variantType) => {
  if (val === 'fulfill') {
    return 'bg-accent-500 text-white hover:bg-accent-600';
  }

  if (val === 'outline') {
    return 'text-accent-500 border border-accent-500 hover:text-accent-600 hover:border-accent-600';
  }

  return 'text-accent-500 hover:text-accent-600';
};

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.HTMLProps<HTMLButtonElement>
>(({ variant, children, className, icon, textClassName, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={`px-4 py-2 font-bold rounded-lg h-10 flex justify-center items-center ${getClassNameVariant(
        variant,
      )} ${className}`}
      {...rest}
    >
      {icon}
      <span className={`${textClassName} ${icon ? 'pl-2' : ''}`}>
        {children}
      </span>
    </button>
  );
});

export default React.memo(Button);
