import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomePage } from './components/page/HomePage';
import { AboutMePage } from './components/page/AboutMePage';
import { ResumePage } from './components/page/ResumePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/about">
          <AboutMePage/>
        </Route>
        <Route path="/skills">
          <ResumePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
