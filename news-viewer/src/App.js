import React from 'react';
import { Route } from 'react-router-dom';
import NewPage from './pages/NewPage';

const App = () => {
  return (
    <Route path='/:category?' component={NewPage} />
  )
}

export default App;
