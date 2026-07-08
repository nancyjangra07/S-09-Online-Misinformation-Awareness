import React from "react";

function NewsCard({ text }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      borderRadius: "8px",
      marginTop: "10px"
    }}>
      <p>{text}</p>
    </div>
  );
}

export default NewsCard;