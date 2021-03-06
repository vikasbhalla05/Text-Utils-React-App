import React, { useState } from 'react'
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function TextForm(props) {

    let [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
        text.split(/\s+/).length <=1 
        ?  props.showAlert("Write Some more text","warning")
        :  props.showAlert("Capitalized text","success");
    }
    const handleLowClick = () => {
      setText(text.toLowerCase());
      text.split(/\s+/).length <=1 
        ?  props.showAlert("Write Some more text","warning")
        :  props.showAlert("Made the text small text","success");
    }
    const handleChange =(e) => {
        setText(e.target.value);
    }
    let handleReset = (e) => {
      
      text.split(/\s+/).length <=1 
        ?  props.showAlert("Write Some more text","warning")
        :  setText(" ") && props.showAlert("Removed the text","success");
    }
    let handleCopy = (e) => {
      navigator.clipboard.writeText(text);
      setText(text);
      props.showAlert("All text Copied","success");
    }

  return (
    <>
        <div className="container my-3" style={{color: props.mode==="dark" ? "white" : "black"}}>
          <h1>{props.heading}</h1>
        </div>
      
        <form className="my-5 container">
            <textarea className="form-control" value={text} onChange={handleChange} id="textArea" rows="8" 
            style={{backgroundColor: props.mode==="dark" ? "#dedede" : "white"}}></textarea>
            <button disabled={text.length ? false : true} className={`btn btn-${props.mode==="light"? "primary" : "dark"} m-2`} onClick={handleUpClick} type="button" >UpperCase</button>
            <button disabled={text.length ? false : true} className={`btn btn-${props.mode==="light"? "primary" : "dark"} m-2`} onClick={handleLowClick} type="button" >LowerCase</button>
            <button disabled={text.length ? false : true} className={`btn btn-${props.mode==="light"? "primary" : "dark"} m-2`} onClick={handleCopy} type="button" >Copy Text</button>
            <button disabled={text.length ? false : true} className={`btn btn-${props.mode==="light"? "alert" : "light"} m-2`} onClick={handleReset} type="button" > Reset</button>
            {/* <DeleteForeverIcon /> */}
        </form>

        <div className="container my-3 " style={{color: props.mode==="dark" ? "white" : "black"}}>
        <hr className='divider'/>
          <h2>Analysis</h2>
          <p>Text Contains {text.split(/\s+/).filter(word => word.length).length} words & {text.length} characters.</p>
          <p>{ 0.008*text.split(/\s+/).filter(word => word.length).length }min Read Time.</p>
          <hr className='divider'/>
          <h2>Preview</h2>
          <p>{text.length>0 ? text : "Nothing to preview"}</p>
        </div>
    </>
  )
}
