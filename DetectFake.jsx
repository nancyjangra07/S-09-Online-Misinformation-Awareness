import React, { useState } from "react";
import { detectFake } from "../services/api";
import ResultBox from "../components/ResultBox";

function DetectFake() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    if (!text) return alert("Enter some text");

    try {
      const res = await detectFake(text);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Backend not running");
    }
  };

  return (
    <div>
      <h2>Check Fake News</h2>

      <textarea
        rows="5"
        cols="60"
        placeholder="Paste news here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={handleCheck}>Check</button>

      {result && (
        <ResultBox
          result={result.result}
          confidence={result.confidence}
        />
      )}
    </div>
  );
}

export default DetectFake;