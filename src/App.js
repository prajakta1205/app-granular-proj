import React from 'react';
import './App.scss';
import NameTag from './components/nameTag';



const makeGreen = BaseComponent => props =>{
  const addGreen={
      style:{
          color:"green"
      }
  }

  const newProps={
      ...props,...addGreen
  }

  return <BaseComponent{...newProps}/>
}

const removeInline = BaseComponent =>props =>{
  const newProps={...props}
  delete newProps.style
  return <BaseComponent{...newProps}/>
}


const GreenNameTag =makeGreen(NameTag)
const CleanNameTag=removeInline(NameTag)


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='name title'>Names List</h1>
        <GreenNameTag firstname="peter" lastname="peterson">Peter</GreenNameTag>
         <CleanNameTag style={{color:'red'}} firstname="John" lastname="Johnson">John</CleanNameTag>{/*that is called as HOC */}
        <NameTag style={{color:'red'}} firstname="Jill" lastname="Jillson" >Jill</NameTag>
        <NameTag></NameTag>
      </header>
    </div>
  );
}

export default App;
