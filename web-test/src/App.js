import './App.css';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import LandingPage from './components/LandingPage';
import SignupPage from './components/User/SignupPage';
import PostPage from './components/Post/CreatePostPage';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/signup" component={SignupPage}/>
        <Route exact path="/post" component={PostPage}/>
      </Switch>
    </Suspense>
  );
}

export default App;
