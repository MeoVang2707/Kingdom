interface ItemProps {
  className: string;
}
export default function Item({ className }: ItemProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="text-primary-100 font-semibold leading-5.5 text-sm">
        09:30
      </div>
      <div>
        <div
          className="rounded-full bg-primary-100 mx-4"
          style={{ width: 100 / 3, height: 100 / 3 }}
        />
      </div>

      <div>
        <span className="text-white font-semibold text-sm leading-5.5">
          You attempted to start an auction on
          <span className="text-accent-500 px-1">Name</span>
          starting from 0.2 BNB to 0.19 BNB in 1 days.
        </span>
        <div className="text-primary-100 text-xs leading-5 cursor-pointer">
          View transaction status here
        </div>
      </div>
    </div>
  );
}
