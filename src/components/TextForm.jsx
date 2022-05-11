import React, { useState } from 'react'

export default function TextForm(props) {

    let [text, setText] = useState("Enter Your text here...");

    const handleClick = () => {
        setText(text.toUpperCase());
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
            <button className="btn btn-primary my-3" onClick={handleClick} type="button" >UpperCase</button>
        </form>
    </>
  )
}
