import './App.css';
import { useContext } from "react"
import { QuizContext } from "./QuizContext" // get state from context
import Question from './Question';


function Quiz() {
  // get state using useContext
  const [state, dispatch] = useContext(QuizContext) // pass context to useContext to use it

  return (
    <div className="quiz">
      {state.showResults && 

      <div className="results">
        <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>Quiz completed!</div>
            <p>You got {state.correctAnswerCount} of {state.questions.length} correct!</p>
          </div>
          <div className="next-button" onClick={() => dispatch({type: "RESTART"})}>Restart</div>
      </div>
    }
      
      { !state.showResults &&
        <>           
          <div className="score">
            Question {state.currentQuestionIndex + 1} / {state.questions.length}
          </div>
          <Question />
    
          <div className="next-button" onClick={() => dispatch({type: "NEXT_QUESTION"})}>Next Question</div>
        </>
      }
   
    </div> 
    
  );
}

export default Quiz;
