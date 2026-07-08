import React from "react";

function QuizCard({ question, options, onAnswer }) {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((opt, i) => (
        <button
          key={i}
          onClick={() => onAnswer(opt)}
          style={{
            display: "block",
            margin: "8px 0",
            padding: "8px",
            cursor: "pointer"
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default QuizCard;