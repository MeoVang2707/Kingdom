import Button from 'src/component/Button';
import ContainerBoder from 'src/component/ContainerBorder';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  buttonTitle: string;
  onClick: () => void;
  className?: string;
}

export default function Container({
  children,
  buttonTitle,
  onClick,
  className,
}: ContainerProps) {
  return (
    <ContainerBoder className={`p-4 flex flex-col items-center ${className}`}>
      {children}
      <div className="mt-4">
        <Button variant="outline" onClick={onClick}>
          {buttonTitle}
        </Button>
      </div>
    </ContainerBoder>
  );
}
