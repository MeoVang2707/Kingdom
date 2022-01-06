import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Auth from './component/Auth';
import Routes from './routes';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Auth>
        <Routes />
      </Auth>
    </Router>
  );
}

export default App;
