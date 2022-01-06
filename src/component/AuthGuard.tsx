import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'src/state/store';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const userInfor = useSelector((state: RootState) => state.auth.userInfor);

  if (!userInfor) {
    return <Redirect to="/login" />;
  }

  return children;
}
