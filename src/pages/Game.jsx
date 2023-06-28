import { useState } from 'react';

const Game = () => {
  const questions = [
    {
      question: '(1) My favorite colour?',
      options: [
          'pink',
          'blue',
          'white',
          'none'
      ],
      correctAnswer: 'none'
  },{
      question: '(2) what do i do for fun?',
      options: [
          'swim',
          'coding',
          'dancing',
          'hanging out'
      ],
      correctAnswer: 'hanging out'
  },{
      question: '(3) what is true about me?',
      options: [
          'Love HTML',
          'Love python',
          'Love React',
          'nothing at all'
      ],
      correctAnswer: 'Love React'
  },{
      question: '(4) My favorite shopping store?',
      options: [
          'Kick',
          'Css',
          'Paprika',
          'New yorker'
      ],
      correctAnswer: 'New yorker'
  },{
      question: '(5) what can you most likely become after the fulltime course at ReDI?',
      options: [
          'DevOps',
          'Frontend Web Developer',
          'Data Scientist',
          'UI UX Developer'
      ],
      correctAnswer: 'Frontend Web Developer'
  }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderOptions = () => {
    return questions[currentQuestion].options.map((option, index) => (
      <div className="form-check" key={index}>
        <input
          className="form-check-input"
          type="radio"
          name="options"
          id={`option${index}`}
          value={option}
          checked={selectedOption === option}
          onChange={() => handleOptionSelect(option)}
        />
        <label className="form-check-label" htmlFor={`option${index}`}>
          {option}
        </label>
      </div>
    ));
  };

  return (
    <>
    <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>Welcome</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-body">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                <div className="card w-50">
                  <div className="card-header">
                  <h1>Quiz Game</h1>
                  </div>
                <div className="card-body">
      {currentQuestion < questions.length ? (
        <div>
          <h3>Question {currentQuestion + 1}</h3>
          <p>{questions[currentQuestion].question}</p>
          <form>{renderOptions()}</form>
          <button className="btn btn-danger mt-3" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>
      ) : (
        <div>
          <h3>Quiz completed!</h3>
          <p>Your score: {score}/{questions.length}</p>
          {score == questions.length ? (
            <>
            <p>Wow!!! You got a perfect score &#128525;</p>
            <div><button className="btn btn-danger">Claim your price</button></div>
            </>
          ):(
            <div></div>
          )}
        </div>
      )}
                </div>
            </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Game;
