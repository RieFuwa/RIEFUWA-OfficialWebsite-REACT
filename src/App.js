import './App.css';
import Routess from './components/Routess';
import React from 'react';



function App() {
  return (
    <div className='app'>
      <Routess></Routess>
    </div>
  );
}

export default  React.memo(App);
