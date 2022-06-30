// get current question passed in
export const shuffleAnswers = (question) => {
    // data
    console.log("question: ", question.inCorrectAnswers)
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.inCorrectAnswers, // flatten array, (copy values out)
    ]
    console.log("unshuffledAnswers: ", unshuffledAnswers)
    // sort 
    return (
    // for every single answer create new object 
    unshuffledAnswers
    .map((item) =>({sort: Math.random(), value: item}))
    .sort((a, b) => a.sort - b.sort) // sort 
    .map((obj) => obj.value) // get back flat array of strings
    )
}