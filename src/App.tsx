import { createBrowserHistory } from 'history';
import { Router, HashRouter } from 'react-router-dom';
import Routes from './routes';

const history = createBrowserHistory();

function App() {
  return (
    <HashRouter>
      <Router history={history}>
        <Routes />
      </Router>
    </HashRouter>
  );
}

export default App;
