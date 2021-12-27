import React from 'react';

export interface IconProps {
  fill?: string;
  fontSize?: string;
}

interface IconContainerProps {
  name: string;
  type?: 'svg' | 'png';
}

export default function Icon({
  name,
  type = 'svg',
  ...props
}: IconContainerProps & React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={`${
        process.env.NODE_ENV === 'development' ? '' : '/Kingdom'
      }/assets/images/${name}.${type}`}
      alt={name}
      {...props}
    />
  );
}
