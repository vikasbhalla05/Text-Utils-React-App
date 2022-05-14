import './App.css';
import Nav from './components/Nav.jsx';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

function App() {
  let [mode, switchDark] = useState("light");
  let [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  function enableDarkMode(){
    mode=="light" ? switchDark("dark") : switchDark("light");
    if(mode==="light"){
      switchDark("dark");
      document.body.style.backgroundColor = "#880000";
      showAlert("Switched to Dark Mode","success");
    }
    else{
      switchDark("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Switched to Light Mode","success");
    }
  }

  return (
    <>
    

    {/* <Nav title="TextUtils" aboutText="About TextUtils" mode={mode} turnDark={enableDarkMode}/> */}
    {/* <Alert alert={alert}/> */}
    <div className="container-fluid">
    <Router>
    <Nav title="TextUtils" aboutText="About TextUtils" mode={mode} turnDark={enableDarkMode}/>
    <Alert alert={alert}/>
        <Routes>
          <Route path="/" element={<TextForm heading={"Write the Text to Analyze:"}  mode={mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
      {/* <TextForm heading={"Write the Text to Analyze:"}  mode={mode} showAlert={showAlert}/> */}
    </div>
    </>
  );
}

export default App;
