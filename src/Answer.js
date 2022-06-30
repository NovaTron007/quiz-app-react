import React from 'react'

const Answer = ({answer, index, onSelectAnswer}) => {
    const letterMapping = ["A", "B", "C", "D"]
    return (
        <div className="answer"  onClick={() => onSelectAnswer(answer)} >
            <div className="answer-letter">{letterMapping[index]}</div>
        <div className="answer-text">{answer}</div>
        </div>
    )
}

export default Answer