import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { resetStateMarketPlace } from 'src/state/reducer/marketplace';
import { useProvider } from 'src/utils/hooks/connect';
import Header from './Header';
interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useProvider();

  useEffect(() => {
    if (!pathname.includes('/marketplace')) {
      dispatch(resetStateMarketPlace());
    }
  }, [dispatch, pathname]);

  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
