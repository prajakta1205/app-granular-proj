import React from 'react';
import './App.scss';
import NameTag from './components/nameTag';


function App() {
  console.log('hi')
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='name title'>Names List</h1>
        <NameTag firstname="peter" lastname="peterson">Peter</NameTag>
        <NameTag firstname="John" lastname="Johnson">John</NameTag>
        <NameTag firstname="Jill" lastname="Jillson" >Jill</NameTag>
      </header>
    </div>
  );
}

export default App;
