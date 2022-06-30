import { createContext, useReducer } from "react" // React.createContext
import questions from "./data" // data
import { shuffleAnswers } from "./utils/helpers"

// inital state
const initialState = {
    questions,
    currentQuestionIndex: 0,
    showResults: false,
    correctAnswerCount: 0,
    answers: shuffleAnswers(questions[0]),
    currentAnswer: ""
}

// reducer to update state: state, action passed
const reducer = (state, action) => {
    switch(action.type) {
        // next question
        case "NEXT_QUESTION":
            // check if end of quiz when index (starts at 0) is same as length -1 
            const showResults = state.currentQuestionIndex === state.questions.length - 1
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1
            return {
                ...state, //copy of current state
                currentQuestionIndex,
                showResults
            }
            // restart: reset to initialState
            case "RESTART":
                return {
                    ...initialState // copy initial state
                }
            case "SELECT_ANSWER":
                console.log("select answer: ", action.payload)
                return {
                    ...state,
                    currentAnswer: action.payload
                }
            // default
            default: 
                return {
                    state
                }
    }
}

// set quiz context to createContext
export const QuizContext = createContext()

// provider to provide state to children
export const QuizProvider = ({children}) => { 
    const value = useReducer(reducer, initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider> // pass reducer to all children
}