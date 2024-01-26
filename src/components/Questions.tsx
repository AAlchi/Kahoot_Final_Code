
interface QuestionsInferface {
  props: String[];
  correct: Number;
}

const Questions: React.FC<QuestionsInferface> = ({ props, correct }) => {
  function IsCorrect(questionNumber) {
    if (questionNumber + 1 == correct) {
      alert('Correct!');
      console.log(questionNumber + 1);
    } else {
      alert('Incorrect');
      console.log(questionNumber + 1);
    }
  }

  const colors = ['#E21B3C', '#1368CE', '#D89E00', '#26890C'];

  const shape = ['triangle', 'diamond', 'circle', 'square'];
  return (
    <div className="questions">
      <div className="addGap">
        <div className="firstColumn">
          <div className="column">
            {props.slice(1, 3).map((prop, index) => (
              <>
                <div
                  onClick={() => IsCorrect(index)}
                  className="answerChoice"
                  style={{ backgroundColor: `${colors[index]}` }}
                >
                  <div className="shapeDiv">
                    <div className={`${shape[index]}`} />
                  </div>
                  {prop}
                </div>
              </>
            ))}
          </div>
          <div className="column">
            {props.slice(3, 5).map((prop, index) => (
              <>
                <div
                  onClick={() => IsCorrect(index + 2)}
                  className="answerChoice"
                  style={{ backgroundColor: `${colors[index + 2]}` }}
                >
                  <div className="shapeDiv">
                    <div className={`${shape[index + 2]}`} />
                  </div>
                  {prop}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
