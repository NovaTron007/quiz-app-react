import React, { useContext } from 'react'
import { QuizContext } from './QuizContext'
import Answer from './Answer'


const Question = () => {
    // get state from context
    const [state, dispatch] = useContext(QuizContext)

    // assign current question index
    const currentQuestion = state.questions[state.currentQuestionIndex]
    
    return (
        <>
        <div className="question">{currentQuestion.question}</div>
        <div className="answers">
            {state.answers.map((item, index) => 
                 <Answer answer={item} key={index} index={index} onSelectAnswer={(answer) => dispatch({type: "SELECT_ANSWER", payload: answer})}/>
            )}
        </div>
        </>
    )
}

export default Question