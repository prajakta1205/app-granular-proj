
import React, { useState } from 'react';
import './App.scss';
import NameTag from './components/nameTag';



// const makeGreen = BaseComponent => props =>{
//   const addGreen={
//       style:{
//           color:"green"
//       }
//   }

//   const newProps={
//       ...props,...addGreen
//   }

//   return <BaseComponent{...newProps}/>
// }

// const removeInline = BaseComponent =>props =>{
//   const newProps={...props}
//   delete newProps.style
//   return <BaseComponent{...newProps}/>
// }


// const GreenNameTag =makeGreen(NameTag)
// const CleanNameTag=removeInline(NameTag)


const initiaName=[
  {firstname:"peter",lastname:"peterson"},
  {firstname:"John",lastname:"Johnson"},
  {firstname:"Jill",lastname:"Jillson"}
]


function App() {
  const[name,setName]=useState(initiaName)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='name title'>Names List</h1>
        {
          name.map((v,i)=>{
            return <NameTag key={`${i}${v.firstname}${v.lastname}`} firstname={v.firstname} lastname={v.lastname}>John</NameTag>
          })
        }
        {/* <NameTag firstname="peter" lastname="peterson">Peter</NameTag>
         <NameTag firstname="John" lastname="Johnson">John</NameTag>
        <NameTag  firstname="Jill" lastname="Jillson" >Jill</NameTag> */}
      </header>
    </div>
  );
}

export default App;
