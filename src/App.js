import './App.css';
import Nav from './components/Nav.jsx';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

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
    <Nav title="TextUtils" aboutText="About TextUtils" mode={mode} turnDark={enableDarkMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <TextForm heading={"Write the Text to Analyze:"}  mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
