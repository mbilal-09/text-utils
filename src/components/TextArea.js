import React, {useState} from 'react'

export default function TextArea(props) {
    const upperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UppperCase", "success")
    }

    const lowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase", "success")
    }

    const clearText = () => {
        setText(text = '');
        props.showAlert("Text Cleared", "success")
    }

    const copyText = () => {
        let text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success")
    }

    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    let [text, setText] = useState('')
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="textBox" className="form-label"></label>
                    <textarea className="p-2" value={text} onChange={handleOnChange} placeholder='Enter text here' id="textBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={upperCase}>ABC</button>
                <button className='btn btn-primary mx-2' onClick={lowerCase}>abc</button>
                <button className='btn btn-primary mx-2' onClick={clearText}>Clear</button>
                <button className='btn btn-primary mx-2' onClick={copyText}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={removeSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
                <p>{text.length === 0 ? '0.000' : 0.008 * text.split(" ").length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length === 0 ? 'preview here' : text}</p>
            </div>
        </>
    )
}
