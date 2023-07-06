import React, { useState } from 'react'

export default function Text(props) {
    const [text,setText]= useState('')
    const handleOnchange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const upperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase Enabled","success");

    }
    const lowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase Enabled","success");


    }
    const clearText=()=>{
        let newText=" ";
        setText(newText);
        props.showAlert("Text Is Cleared","warning");
    }
    const copyText=()=>{
      navigator.clipboard.writeText(text)
      props.showAlert("Text Is Copied","primary");

    }
   
  return (
    <>
    <div className={`text-${props.mode==='light'?'dark':'light'}`}>
        <h2 >Welcome To Text</h2>
      <div className="form-floating my-2">
  <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={handleOnchange} ></textarea>
</div>
<button type="button" className="btn btn-primary mx-1 my-1 btn-lg "onClick={upperCase}>UpperCase</button>
<button type="button" className="btn btn-primary mx-1 my-1 btn-lg" onClick={lowerCase}>LowerCase</button>
<button type="button" className="btn btn-primary mx-1 my-1 btn-lg" onClick={clearText}>ClearText</button>
<button type="button" className="btn btn-primary mx-1 my-1 btn-lg" onClick={copyText}>CopyText</button>

</div>
<div className={`form-floating my-2 text-${props.mode==='light'?'dark':'light'}`}>
  <h3>Text Summary</h3>
    <p>{text.split(/\s/).length-1} Words And {text.length} Character</p>
    <p>{`${(text.split(" ").length-1)*0.0042} Minutes Require To Read The Paragraph`}</p>
    <h4><b>PRIVIEW</b></h4>
    <p> {text}</p>
</div>
    </>
  )
}
