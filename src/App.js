import './App.css';
import Nav from './components/Nav.jsx';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  let [mode, switchDark] = useState("light");

  function enableDarkMode(){
    mode=="light" ? switchDark("dark") : switchDark("light");
    if(mode==="light"){
      switchDark("dark");
      document.body.style.backgroundColor = "#880000";
    }
    else{
      switchDark("light");
      document.body.style.backgroundColor = "#fff";
    }
  }

  return (
    <>
    <Nav title="TextUtils" aboutText="About TextUtils" mode={mode} turnDark={enableDarkMode}/>
    <div className="container">
      <TextForm heading={"Write the Text to Analyze:"}  mode={mode}/>
    </div>
    </>
  );
}

export default App;
