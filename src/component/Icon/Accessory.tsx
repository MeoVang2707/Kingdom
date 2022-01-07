import { IconProps } from '.';

export default function Account({ fontSize = '24px' }: IconProps) {
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
        d="M12.7219 5.01562L12.4406 5.11875C12.4219 5.08125 12.4125 5.05312 12.3938 5.01562C12.3938 5.01562 10.875 2.04375 7.43438 2.37187C3.99376 2.7 6.00001 7.35 6.27188 7.65937C6.54376 7.96875 7.43438 9.1125 6.63751 9.6375C5.84063 10.1625 5.16563 9.53437 4.49063 8.31562C3.81563 7.09687 1.93126 8.15625 3.17813 10.2937C4.41563 12.4313 6.32813 12.7594 7.62188 11.9438C8.91564 11.1375 9.53438 8.91562 8.34376 7.32187C7.15313 5.72812 6.75938 3.2625 9.14063 4.35C10.2281 4.95 10.725 6.225 10.7906 6.66562L9.40313 15.5813L20.1656 21.8531L20.55 21.525L21.2438 10.6312L12.7219 5.01562ZM16.4438 14.2031L15.6094 16.1813L14.7188 14.2031L12.7031 13.35L14.7 12.4969L15.5344 10.5187L16.425 12.4969L18.4406 13.35L16.4438 14.2031ZM17.8031 11.4656L13.6594 7.05937L19.7156 10.8375L17.8031 11.4656Z"
        fill="currentColor"
      />
    </svg>
  );
}