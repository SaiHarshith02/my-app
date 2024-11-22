import React,{useState} from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState("")
    const handleChange=(event)=>{
        setText(event.target.value)
    }
    const handleUpper=()=>{
        setText(Text.toUpperCase())
        props.handleAlert("success","Text Converted To Upper Case")
    }
    const handleLower=()=>{
        setText(Text.toLowerCase())
        props.handleAlert("success","Text Converted To Lower Case")
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(Text)
        props.handleAlert("success","Text Copyed To Clipbord")
    }
    const handleSpaces=()=>{
        let regx=/  */g
        setText(Text.replace(regx," "))
        props.handleAlert("success","Extra Spaces Are Removed")
    }
    const handleClear=()=>{
        setText("")
        props.handleAlert("success","Text Removed From Text Field")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = Text;
        window.speechSynthesis.speak(msg);
        props.handleAlert("success","Generating Audio")
      }
  return (
    <>
       <div className={`container text-${props.mode==="light"?"dark":"light"}`} >
                <h3>Enter Text Here</h3>
            <div className="mb-3">
                <textarea className={`form-control text-${props.mode==="light"?"dark":"light"}`} id="mybox" rows="8"  value={Text} onChange={handleChange} data-bs-theme={props.mode}></textarea>
            </div>
            <button disabled={Text.length===0} className="btn btn-primary my-2 " onClick={handleUpper}>Convert to Upper Case</button>
            <button disabled={Text.length===0}  className="btn btn-primary my-2 mx-2" onClick={handleLower}>Convert to Lower Case</button>
            <button disabled={Text.length===0}  className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={Text.length===0}  className="btn btn-primary my-2 mx-2"onClick={handleSpaces}>Remove Extra Spaces</button>
            <button disabled={Text.length===0}  className="btn btn-primary my-2 mx-2 "onClick={handleClear}>Clear Text</button>
            <button disabled={Text.length===0}  type="submit" onClick={speak} className="btn btn-danger mx-2 my-2">Speak</button>
        </div>
        <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
            <h4>Text Summary</h4>
            <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {Text.length} Characters</p>
            <p>{0.008* Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to Read</p> 
            <h4>Preview</h4> 
            <p>{Text.length>0?Text:"Nothing to preview "}</p>  
        </div>
    </>
  )
}
