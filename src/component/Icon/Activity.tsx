import { IconProps } from '.';

export default function Activity({
  fill = '#868790',
  fontSize = '24px',
}: IconProps) {
  return (
    <svg
      fontSize={fontSize}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1798 4.41C17.1798 3.08 18.2598 2 19.5898 2C20.9198 2 21.9998 3.08 21.9998 4.41C21.9998 5.74 20.9198 6.82 19.5898 6.82C18.2598 6.82 17.1798 5.74 17.1798 4.41ZM13.3297 14.7593L16.2197 11.0303L16.1797 11.0503C16.3397 10.8303 16.3697 10.5503 16.2597 10.3003C16.1507 10.0503 15.9097 9.8803 15.6507 9.8603C15.3797 9.8303 15.1107 9.9503 14.9497 10.1703L12.5307 13.3003L9.75969 11.1203C9.58969 10.9903 9.38969 10.9393 9.18969 10.9603C8.99069 10.9903 8.81069 11.0993 8.68969 11.2593L5.73069 15.1103L5.66969 15.2003C5.49969 15.5193 5.57969 15.9293 5.87969 16.1503C6.01969 16.2403 6.16969 16.3003 6.33969 16.3003C6.57069 16.3103 6.78969 16.1893 6.92969 16.0003L9.43969 12.7693L12.2897 14.9103L12.3797 14.9693C12.6997 15.1393 13.0997 15.0603 13.3297 14.7593ZM15.4497 3.7803C15.4097 4.0303 15.3897 4.2803 15.3897 4.5303C15.3897 6.7803 17.2097 8.5993 19.4497 8.5993C19.6997 8.5993 19.9397 8.5703 20.1897 8.5303V16.5993C20.1897 19.9903 18.1897 22.0003 14.7897 22.0003H7.40069C3.99969 22.0003 1.99969 19.9903 1.99969 16.5993V9.2003C1.99969 5.8003 3.99969 3.7803 7.40069 3.7803H15.4497Z"
        fill={fill}
      />
    </svg>
  );
}