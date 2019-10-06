import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ToDoBucket,ToDoContainer,PageNotFound } from './components/screens'
import { Provider } from 'react-redux';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
      <Router>
          <Switch>
            <Route exact path="/todo/:id" component={ToDoContainer} />
            <Route exact path="/" component={ToDoBucket} />
            <Route  component={PageNotFound} />
          </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
