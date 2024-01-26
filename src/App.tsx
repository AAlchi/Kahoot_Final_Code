import { FC } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Questions from './components/Questions';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [answers, setAnswers] = useState([
    'Press Edit To Start',
    'First',
    'Second',
    'Third',
    'Fourth',
  ]);
  const [correct, setCorrect] = useState(1);
  let prompts = [
    'Enter your question',
    'Enter your FIRST answer',
    'Enter your SECOND answer',
    'Enter your THIRD answer',
    'Enter your FOURTH answer',
    'Enter your CORRECT answer (1, 2, 3, or 4)',
  ];

  function Edit() {
    const [
      editQuestion,
      answerChoiceOne,
      answerChoiceTwo,
      answerChoiceThree,
      answerChoiceFour,
      correctChoice,
    ] = prompts.map((promptQuestion) => prompt(promptQuestion));

    setAnswers([
      `${editQuestion}`,
      `${answerChoiceOne}`,
      `${answerChoiceTwo}`,
      `${answerChoiceThree}`,
      `${answerChoiceFour}`,
    ]);
    setCorrect(parseInt(correctChoice));
  }
  return (
    <div className="App">
      <Header props={answers} />
      <div className="skipButtonMain">
        <button className="skipButton" onClick={Edit}>
          Edit
        </button>
      </div>
      <MainComponent />
      <Questions props={answers} correct={correct} />
    </div>
  );
};
