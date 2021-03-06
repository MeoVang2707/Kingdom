import { useHistory } from 'react-router';
import Icon from '../Icon';
import './style.scss';

export default function Cart() {
  const history = useHistory();
  const onClick = () => {
    history.push(`/character/${Math.random()}`);
  };

  return (
    <div
      className={`cartCharacter relative flex flex-col items-center bg-primary-300 rounded-lg cursor-pointer hover:border-2 hover:border-accent-500`}
      onClick={onClick}
    >
      <Icon name="char/char1" type="png" className="m-6 mb-4" />

      <div className="absolute bottom-4 w-full left-0 flex justify-center">
        <div className="flex items-center">
          <span className="pr-0.5 text-2xl text-accent-500 font-bold">0.5</span>
          <div>
            <Icon name="bnb" />
          </div>
          <span className="text-white text-sm pl-1">$ 1,200</span>
        </div>
      </div>
      <div className="absolute top-3 left-3 bg-accent-500 flex items-center px-1 rounded">
        <Icon name="warrrior" />
        <span className="text-white font-semibold text-xs">#62354876</span>
      </div>
    </div>
  );
}
