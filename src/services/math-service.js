function ProcessAnswer(a, b, userAnswer, operator){
    if(operator === '+' || operator === 'add'){
        let correctAnswer = CheckAddition(a, b)

        let outcome = TestUserAnswer(userAnswer, correctAnswer)

        return outcome
    }
    else if (operator === '-' || operator === 'sub'){
        let correctAnswer = CheckSubstraction(a, b)

        let outcome = TestUserAnswer(useranswer, correctAnswer)

        return outcome
    } else {
        return 'invalid operation'
    }
}

function GetRandomNumber(min, max) {
    //this is where the `random` numbers will come from for each of the equations
    return Math.random() * (max - min) + min
}

function CheckAddition(a, b) {
    return (a + b)
}

function CheckSubstraction(a, b) {
    if(a > b){
        return (a - b)
    } else {
        return (b - a)
    }
}

function TestUserAnswer(userAnswer, realAnswer){
    if (userAnswer == realAnswer){
        return 'correct'
    } else {
        return 'wrong'
    }
}

module.exports = {
    ProcessAnswer,
    GetRandomNumber
}