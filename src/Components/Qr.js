import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./Qr.css";




function Qr() {
  const [link, setLink] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setLink(value);

    try {
      new URL(value);
      setValid(true);
    } catch {
      setValid(false);
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      
      <h2>Q Code Generator</h2>

      <input
        type="text"
        placeholder="Paste your link here..."
        value={link}
        onChange={handleChange}
        style={{
          width: "320px",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "6px",
          border: valid ? "1px solid #ccc" : "2px solid red",
          marginBottom: "10px"
        }}
      />

      {!valid && link && (
        <p style={{ color: "red", fontSize: "14px" }}>
          Please enter a valid link (with http:// or https://)
        </p>
      )}

      <br />

      {link && valid && (
        <div style={{
          background: "white",
          padding: "16px",
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}>
          <QRCode value={link} size={220} />
        </div>
      )}

      {link && valid && (
        <p style={{ marginTop: "10px", color: "green" }}>
          ✅ Scan this QR to open:  
          <br />
          <b>{link}</b>
        </p>
      )}

     
      <a
        className="whats-app"
        href="https://wa.me/9677054141"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>

    </div>
  );
}

export default Qr;
