import React from 'react';
import Home from './components/Home';
import Auth from './auth/Auth';
import { Route } from "react-router-dom";
import Register from './auth/Register';
function App() {
   return (
    <>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Register} />
      <Route path="/"  component={Home} exact />
    </>
  );
}

export default App;
