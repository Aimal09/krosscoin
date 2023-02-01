import React from 'react';
//import Header from './components/Header/Header';
import FullHeader from './components/Headers/FullHeader';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <FullHeader />
      <Home />
    </div>
  );
}

export default App;
