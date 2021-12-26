import OneDay from '../MyAccount/Activities/OneDay';
export default function Activity() {
  return (
    <div className="pl-32">
      <div className="text-primary-100 font-semibold leading-8 text-2xl">
        Activities
      </div>

      {[1, 2, 3, 4].map((item) => {
        return <OneDay key={item} className="mt-4" />;
      })}
    </div>
  );
}
