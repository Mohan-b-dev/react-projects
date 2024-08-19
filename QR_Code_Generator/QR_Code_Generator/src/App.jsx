import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";
function App() {
  const [text, settext] = useState("");

  function handlechange(e) {
    settext(e.target.value);
  }
  return (
    <>
      <div className="app">
        <h1>QR Code Generator</h1>
        <QRCode value={text} />

        <div className="input-here">
          <p> Enter your text here</p>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              handlechange(e);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
