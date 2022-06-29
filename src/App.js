import React, { useState } from 'react';
import './App.scss';
// import Item from './components/item'
// import useList from './hooks/useLists';
import useCustomFetch from './hooks/useCustomFetch';

function App() {
  const [url, setUrl] = useState(null);
  const [data, loading, error] = useCustomFetch(url);

  function getFollowers(e){
    if(e.key === 'Enter'){
      setUrl("https://api.github.com/users/" + e.target.value);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          GitID:

          <input onKeyPress={getFollowers}></input>

          {loading && url  && <div>Loading ....</div>}
          {!loading && data  && (
            <div>Followers: {data.rData.followers}</div>
          )}
          {error && <div>Error: {error}</div>}
        </h2>
      </header>
    </div>
  );

  

// const initList = [
//   { name: "tomato", calorie: 20 },
//   { name: "rice", calorie: 30 },
//   { name: "candy", calorie: 100 }
// ];


  // const items = useList(initList);
  // const [editable, setEditable] = useState(false);

  // function removeItemHandle(e) {
  //   items.removeItem(e.target.name)
  // }
  // function makeEditableHandle() {
  //   setEditable(true);
  // }
  // function keyPressHandle(e, i) {
  //   if (e.key === "Enter") {
  //     setEditable(!editable);
  //     items.saveItem(i, e.target.value);
  //   }
  // }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //     <h2>Grocery List</h2>
  //       {items.list.map((v, k) => {
  //         return (
  //           <Item
  //             key={`${k}${v.name}${v.calorie}`}
  //             item={v}
  //             onClick={removeItemHandle}
  //             editable={editable}
  //             onDoubleClick={makeEditableHandle}
  //             onKeyPress={keyPressHandle}
  //             index={k}
  //           />
  //         );
  //       })}
  //     </header>
  //   </div>
  // );
}

export default App;
