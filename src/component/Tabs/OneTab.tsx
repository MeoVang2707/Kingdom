import Icon from '../Icon';

interface OneTabProps {
  title: string;
  logo: React.ReactNode;
  onClick: () => void;
  className?: string;
  isSelected?: boolean;
}

export default function OneTab(props: OneTabProps) {
  return (
    <div
      className={`cursor-pointer flex flex-col justify-between ${
        props.isSelected
          ? 'text-accent-500 '
          : 'text-primary-100 hover:text-white'
      } ${props.className}`}
      onClick={props.onClick}
      style={{ height: 35 }}
    >
      <div className="flex">
        {props.logo}
        <div className={`font-bold pl-2 `}>{props.title}</div>
      </div>
      <div
        className={`h-3px rounded-lg ${
          props.isSelected ? 'bg-accent-500 ' : 'bg-current'
        }`}
      />
    </div>
  );
}
