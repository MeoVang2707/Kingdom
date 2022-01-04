import Wallet from './Wallet';
import Activities from './Activities';

export default function MyAccount() {
  return (
    <div className="w-full px-4">
    <div className="max-w-59rem mx-auto">
      <Wallet />

      <Activities />
    </div>
    </div>
  );
}
