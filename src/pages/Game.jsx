
    import { useState } from 'react';
    // <!-- import './App.css'; -->
    export function Game (){


        const tests = [
            {
                question: '1 My favorite colour?',
                answers: [
                    'pink',
                    'blue',
                    'white',
                    'none'
                ],
                correctAnswer: 'none'
            },{
                question: '2 what do i do for fun?',
                answers: [
                    'swim',
                    'coding',
                    'dancing',
                    'hanging out'
                ],
                correctAnswer: 'hanging out'
            },{
                question: '3 what is true about me?',
                answers: [
                    'Love HTML',
                    'Love python',
                    'Love React',
                    'nothing at all'
                ],
                correctAnswer: 'Love React'
            },{
                question: '4 My favorite shopping store?',
                answers: [
                    'Kick',
                    'Css',
                    'Paprika',
                    'New yorker'
                ],
                correctAnswer: 'Newyorker'
            },{
                question: '5 what can you most likely become after the fulltime course at ReDI?',
                answers: [
                    'DevOps',
                    'Frontend Web Developer',
                    'Data Scientist',
                    'UI UX Developer'
                ],
                correctAnswer: 'Frontend Web Developer'
            }
        ]
    
        const [score, setScore] = useState(0)
        const [currentQuestion, setCurrentQuestion] = useState(0)
    
        function advanceCurrentQuestion () {
          setCurrentQuestion(i => i+= 1)
        }
        function selectHandler (e) {
          console.log(e.target.textContent);
          if(e.target.textContent === tests[currentQuestion].correctAnswer) {
            setScore(i => i += 1)
          }
          advanceCurrentQuestion () // jump to next question block
          // setCurrentQuestion(i => i+= 1) //need to be limited to the tests.length
    
        }
    
      return (
        <div className="App">
          <p>Your Score is: {score} | <span>question number {currentQuestion + 1} of 5 questions</span></p>
          
          
          <h2>{tests[currentQuestion].question}</h2>
          
          <main>
          {tests[currentQuestion].answers.map(i => <div className="answers"><p onClick={selectHandler}>{i}</p></div>)}
          </main>
        
          
        <button onClick={advanceCurrentQuestion}>Next</button>
            
    
        </div>
      )
    }

    