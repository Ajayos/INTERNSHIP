import './App.css';
import Student from './components/Student';
import View from './components/View';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Student" element={<Student />} />
        <Route path="/Views" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
