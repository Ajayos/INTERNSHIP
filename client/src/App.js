import React from 'react';
import Home from './components/Home';
import Auth from './auth/Auth';
function App() {
  const user = JSON.parse(localStorage.getItem("Auth"));
  if(!user) return <Auth />;
  else return (
   <Home />
  );
}


export default App;
 