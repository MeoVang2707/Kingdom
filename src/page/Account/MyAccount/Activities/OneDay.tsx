import Item from './Item';

interface OneDayProps {
  className?: string;
}

export default function OneDay({ className }: OneDayProps) {
  return (
    <div className={className}>
      <div className="text-white font-semibold leading-6">Dec 13, 2021</div>
      {[1, 2, 3, 4].map((item) => (
        <Item key={item} className="mt-3" />
      ))}
    </div>
  );
}
