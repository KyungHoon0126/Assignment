import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import IntroductionPage from './components/IntroductionPage';
import ProjectPage from './components/ProjectPage';
import Wilt from './components/projects/Wilt';
import Kiosk from './components/projects/Kiosk';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>  
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/introduction">IntroductionPage</Link>
          </li>
          <li>
            <Link to="/project">ProjectPage</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/introduction" component={IntroductionPage} />
        <Route exact={true} path="/project" component={ProjectPage} />
        
        <Route path="/project/wilt" exact component={Wilt} />
        <Route path="/project/kiosk" exact component={Kiosk} />
        
        <Route render={(loaction) => {
            <h2>이 페이지는 존재하지 않습니다.</h2>
          }} 
        />
      </Switch>
    </div>
  );
}

export default App;
