import React, { useState } from "react";
import QuizCard from "../components/QuizCard";

const quizData = [
  {
    question: "Aliens landed in India",
    options: ["Fake", "Real"],
    answer: "Fake"
  },
  {
    question: "New government scheme launched",
    options: ["Fake", "Real"],
    answer: "Real"
  }
];

function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (opt) => {
    if (opt === quizData[index].answer) {
      setScore(score + 1);
    }

    if (index < quizData.length - 1) {
      setIndex(index + 1);
    } else {
      alert("Quiz finished!");
    }
  };

  return (
    <div>
      <h2>Quiz</h2>

      <QuizCard
        question={quizData[index].question}
        options={quizData[index].options}
        onAnswer={handleAnswer}
      />

      <h3>Score: {score}</h3>
    </div>
  );
}

export default Quiz;