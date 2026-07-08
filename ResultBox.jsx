import React from "react";

function ResultBox({ result, confidence }) {
  return (
    <div style={{
      marginTop: "15px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px"
    }}>
      <h3>Result: {result.toUpperCase()}</h3>
      <p>Confidence: {confidence}%</p>
    </div>
  );
}

export default ResultBox;