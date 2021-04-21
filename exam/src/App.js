import React, { Suspense, useCallback, useRef, useReducer } from 'react';
import {
  Switch, Route
} from "react-router-dom";

import LandingPage from '../src/components/LandingPage';
import SignupPage from '../src/components/User/SignupPage';
import CreatePostPage from '../src/components/Post/CreatePostPage';

function App() {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/createpost" component={CreatePostPage} />
          </Switch>
        </Suspense>
    );
}

export default App;
