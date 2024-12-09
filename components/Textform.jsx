/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Textform() {

    const [showAlert, setShowAlert] = useState(false);

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
    }

    const handleRSclick = () => {
        setText(text.split('').reverse().join(''));
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 1000);
    }

    const handleClearClick = () => {
        setText("");
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const [text, setText] = useState('');


    return (
        <>
            <div style={{ height: '50px' }}>
                {showAlert && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Copied!</strong> Text has been copied to the clipboard.
                    </div>
                )}
            </div>

            <div className="container">

                <h2>TextUtils - Precision Tool for Text Transformation and Word Counter</h2>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter the text here' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className='text-center'>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-1" onClick={handleUpClick} > <strong>Convert to Uppercase</strong> </button>
                    <button disabled={text.length === 0} className="btn btn-outline-info mx-2  my-1" onClick={handleLoClick} ><strong>Convert to Lowercase</strong></button>
                    <button disabled={text.length === 0} className="btn btn-outline-warning mx-2  my-1" onClick={handleRSclick} > <strong>Reverse Text</strong> </button>
                    <button disabled={text.length === 0} className="btn btn-outline-success mx-2  my-1" onClick={handleCopyClick} > <strong>Copy Text</strong> </button>
                    <button disabled={text.length === 0} className="btn btn-outline-danger mx-2  my-1" onClick={handleClearClick} > <strong>Clear</strong> </button>
                </div>
            </div>

            <div className="container my-4">
                <div><h2 className="alert-heading text-center">Text Summary</h2>
                    <div className=' alert alert-success row py-2 rounded justify-content-center text-md-center text-lg-left' role="alert">
                        <label htmlFor="numberOfWords" className="col-sm-3 col-md-2 col-form-label text-center px-0">Word Count :</label>
                        <div className="col-sm-1">
                            <input type="text" readOnly className=" col-sm-1 form-control-plaintext border border-sccess rounded text-center bg-success text-light" id="numberOfWords" value={text.trim().split(/\s+/).filter(word => word !== "").length} />
                        </div>
                        <label htmlFor="numberOfCharacters" className="col-sm-3 col-md-2  col-form-label text-center px-0">Characters :</label>
                        <div className="col-sm-1">
                            <input type="text" readOnly className="form-control-plaintext border border-sccess rounded text-center bg-success text-light" id="numberOfCharacters" value={text.length} />
                        </div>
                        <label htmlFor="numberOfCharacters" className="col-sm-3 col-md-2  col-form-label text-center px-0">Estimate Read Time :</label>
                        <div className="col-sm-1">
                            <input type="text" readOnly className="form-control-plaintext border border-sccess rounded text-center bg-success text-light" id="numberOfCharacters" value={0.01 * text.trim().split(/\s+/).filter(word => word !== "").length} />Minutes
                        </div>
                    </div>
                </div>

                <h2 className="alert-heading text-center">Preview</h2>
                <div className="alert alert-warning" role="alert">
                    <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
                </div>

            </div>


        </>
    )
}

