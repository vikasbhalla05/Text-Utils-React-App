import React, { useState } from 'react'

export default function TextForm(props) {

    let [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLowClick = () => {
      setText(text.toLowerCase());
    }
    const handleChange =(e) => {
        setText(e.target.value);
    }

  return (
    <>
        <div className="container my-3">
          <h1>{props.heading}</h1>
        </div>
      
        <form class="my-5">
            <textarea className="form-control" value={text} onChange={handleChange} id="textArea" rows="8"></textarea>
            <button className="btn btn-primary m-2" onClick={handleUpClick} type="button" >UpperCase</button>
            <button className="btn btn-primary m-2" onClick={handleLowClick} type="button" >LowerCase</button>
        </form>

        <div className="container my-3">
          <h2>Analysis</h2>
          <p>Text Contains {text.split(" ").length} words & {text.length} characters.</p>
          <p>{ 0.008*text.split(" ").length }min Read Time.</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
    </>
  )
}
