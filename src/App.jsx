import React, { useState } from "react";
import "./App.css";

const App = () => {
  //useState for handling codes for html css js-
  const[html, setHtml] = useState("");
  const[css, setCss] = useState("");
  const[javascript, setJavascript] = useState("");

  //code for compile code-
  const handleOutput = (e) =>
  {
    const iframe = document.getElementById("output");
    //add html and css-
    iframe.contentDocument.body.innerHTML =
    html + "<style>" + css + "</style> ";

    //adding javascript-
    iframe.contentWindow.eval(javascript);
  }

  return (
    <div className="playground">
      {/* for ide */}
      <div className="left">

        {/* for HTML */}
        <label>HTML</label>
         <textarea name="Html" onChange={(e) => setHtml(e.target.value)}></textarea>
        
        {/* for CSS */}
        <label>CSS</label>
         <textarea name="Css" onChange={(e) => setCss(e.target.value)}></textarea>

        {/* for Javascript */}
        <label>JAVASCRIPT</label>
         <textarea name="JavaScript" onChange={(e) => setJavascript(e.target.value)}></textarea>
         
      </div>

        {/* for Output */}
        <div className="right">
         <button className="button" onClick={handleOutput}>RUN</button>

        {/* we use iframe to render html in our web app */}
         <iframe id="output"></iframe>
        </div>

    </div>
  );
};

export default App;
