import Icon from "../Icon";

interface OneTabProps {
  title: string;
  logo: string;
  onClick: () => void;
  className?: string;
  isSelected?: boolean;
}

export default function OneTab(props: OneTabProps) {
  return (
    <div
      className={`cursor-pointer flex flex-col justify-between ${props.className}`}
      onClick={props.onClick}
      style={{ height: 35 }}
    >
      <div className="flex">
        <Icon name={props.logo} />
        <div
          className={`font-bold pl-2 ${
            props.isSelected ? "text-accent-500 " : "text-primary-100"
          }`}
        >
          {props.title}
        </div>
      </div>
      <div
        className={`h-3px rounded-lg ${
          props.isSelected ? "bg-accent-500 " : "bg-primary-100"
        }`}
      />
    </div>
  );
}
