import React,{useState} from "react";

//React hooks(useState) is used here. They let you use state and other react features without writing a class
export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked " + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }

  const handleLoClick=()=>{
    // console.log("Uppercase was clicked " + text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }

  const handleClearClick=()=>{
    // console.log("Uppercase was clicked " + text);
    let newText="";
    setText(newText);
    props.showAlert("Text cleared!","success");
  }

  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!","success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!","success");
  }
  const[text,setText]=useState('');
  //here, text is a state variable
  // text="new text";//wrong way to change the state
  // setText("new text");//correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          //you have to listen to onchange envent as without that you cannot type inside the text area
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#2e60aa':'white',color:props.mode==='dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</b></p>
      <p><b>{0.008*text.split("").filter((element)=>{return element.length!==0}).length} minutes read</b></p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  );
}
