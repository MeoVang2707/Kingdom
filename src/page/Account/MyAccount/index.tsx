import Wallet from './Wallet';
import Activities from './Activities';

export default function MyAccount() {
  return (
    <div className="max-w-59rem w-full pl-32">
      <Wallet />

      <Activities />
    </div>
  );
}
