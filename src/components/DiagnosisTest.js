import React, { useState } from "react";
import "./DiagnosisTest .css";

const DiagnosisTest = () => {
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState("");
  const [emoji, setEmoji] = useState("");

  const questions = [
    "How often do you feel sad or down?",
    "Do you have trouble concentrating?",
    "Have you lost interest in activities you usually enjoy?",
  ];

  const handleSubmit = () => {
    const score = answers.reduce((acc, cur) => acc + cur, 0);
    if (score < 5) {
      setResult("Low risk of depression.");
      setEmoji("😊");
    } else if (score < 10) {
      setResult("Moderate risk of depression.");
      setEmoji("😐");
    } else {
      setResult("High risk of depression. Please seek professional help.");
      setEmoji("😟");
    }
  };


  return (
    <div className="diagnosis-test-container">
      <h2 className="diagnosis-test-title">Diagnosis Test</h2>
      {questions.map((q, index) => (
        <div key={index}>
          <p className="question">{q}</p>
          <select
            className="select-dropdown"
            onChange={(e) => {
              const updatedAnswers = [...answers];
              updatedAnswers[index] = parseInt(e.target.value);
              setAnswers(updatedAnswers);
            }}
          >
            <option value="0">Never</option>
            <option value="1">Rarely</option>
            <option value="2">Sometimes</option>
            <option value="3">Often</option>
            <option value="4">Always</option>
          </select>
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        {result && (
          <div className="result">
            <p>{emoji} {result}</p>
          </div>
        )}
      </div>
    
    
  );
};

export default DiagnosisTest;
