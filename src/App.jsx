import React, { useState, useRef } from "react";
import "./App.css";

const App = () => {
   //useState for handling codes for html css js-
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const outputRef = useRef();

  //code for compile code-
  const handleOutput = () => {
    if (isLocked) 
    {
      alert("Unlock the code editor before running.");
    } 

    else 
    {
      const iframe = outputRef.current;
      //add html and css-
      iframe.contentDocument.body.innerHTML =
        html + "<style>" + css + "</style> ";
      //adding javascript-
      iframe.contentWindow.eval(javascript);
    }
  };

  //handleCopy functionality to copy the clipboard-
  const handleCopy = () => {
    const iframe = outputRef.current;
    const outputDocument = iframe.contentDocument;

    const outputContent = outputDocument.body.innerHTML;

    navigator.clipboard.writeText(outputContent).then(() => {
      alert("Output code copied to clipboard!");
    });
  };

  //handleToggleLock functionality to lock/unclock 
  const handleToggleLock = () => {
    setIsLocked(!isLocked);
  };

  //handleSave functionality to save the text code or download
  const handleSave = () => {
    const codeToSave = `${html}\n<style>${css}</style>\n<script>${javascript}</script>`;
    const blob = new Blob([codeToSave], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code.txt";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="playground">
       {/* for ide */}
      <div className="left">

        {/* for HTML */}
        <label>HTML</label>
        <textarea
          name="Html"
          onChange={(e) => setHtml(e.target.value)}
          value={html}
        />
 
        {/* for CSS */}
        <label>CSS</label>
        <textarea
          name="Css"
          onChange={(e) => setCss(e.target.value)}
          value={css}
        />

        {/* for Javascript */}
        <label>JAVASCRIPT</label>
        <textarea
          name="JavaScript"
          onChange={(e) => setJavascript(e.target.value)}
          value={javascript}
        />

        
      </div>
      {/* for Output */}
      <div className="right">
      <div className="editor-buttons">
          <button className="button" onClick={handleOutput}>
            RUN
          </button>
          <button className="button" onClick={handleCopy}>
            COPY
          </button>
          <button
            className={`button ${isLocked ? "locked" : "unlocked"}`}
            onClick={handleToggleLock}
          >
            {isLocked ? "UNLOCK" : "LOCK"}
          </button>
          <button className="button" onClick={handleSave}>
            SAVE
          </button>
        </div>
         {/* we use iframe to render html in our web app */}
        <iframe id="output" ref={outputRef}></iframe>
      </div>
    </div>
  );
};

export default App;





// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   //useState for handling codes for html css js-
//   const[html, setHtml] = useState("");
//   const[css, setCss] = useState("");
//   const[javascript, setJavascript] = useState("");

//   //code for compile code-
//   const handleOutput = (e) =>
//   {
//     const iframe = document.getElementById("output");
//     //add html and css-
//     iframe.contentDocument.body.innerHTML =
//     html + "<style>" + css + "</style> ";

//     //adding javascript-
//     iframe.contentWindow.eval(javascript);
//   }

//   return (
//     <div className="playground">
//       {/* for ide */}
//       <div className="left">

//         {/* for HTML */}
//         <label>HTML</label>
//          <textarea name="Html" onChange={(e) => setHtml(e.target.value)}></textarea>

//         {/* for CSS */}
//         <label>CSS</label>
//          <textarea name="Css" onChange={(e) => setCss(e.target.value)}></textarea>

//         {/* for Javascript */}
//         <label>JAVASCRIPT</label>
//          <textarea name="JavaScript" onChange={(e) => setJavascript(e.target.value)}></textarea>

//       </div>

//         {/* for Output */}
//         <div className="right">
//          <button className="button" onClick={handleOutput}>RUN</button>

//         {/* we use iframe to render html in our web app */}
//          <iframe id="output"></iframe>
//         </div>

//     </div>
//   );
// };

// export default App;
