import Icon from 'src/component/Icon';
import { useHistory } from 'react-router';
import OneDay from './OneDay';

export default function Activities() {
  const history = useHistory();
  const onClickViewAll = () => {
    history.push('/account/activity');
  };
  return (
    <div className="mt-8">
      <div className="text-primary-100 font-semibold leading-8 text-2xl">
        Activities
      </div>

      <div>
        {[1, 2].map((item) => {
          return <OneDay key={item} className="mt-4" />;
        })}
      </div>

      <div
        className="flex items-center cursor-pointer mt-2"
        onClick={onClickViewAll}
      >
        <span className="text-accent-500 text-sm font-semibold pr-2">
          View all activities
        </span>
        <Icon name="arrow_right" />
      </div>
    </div>
  );
}
