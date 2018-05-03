import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from './../../containers/Chat';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Chat} />
      </Switch>
    );
  }
}

export default App;