export function ProcessAnswer(a, b, userAnswer, operator){
    if(operator === '+' || operator === 'add'){
        let correctAnswer = CheckAddition(a, b)

        let outcome = TestUserAnswer(userAnswer, correctAnswer)

        return outcome
    }
    else if (operator === '-' || operator === 'sub'){
        let correctAnswer = CheckSubstraction(a, b)

        let outcome = TestUserAnswer(userAnswer, correctAnswer)

        return outcome
    } else {
        return 'invalid operation'
    }
}

function GetRandomNumber(min, max) {
    //this is where the `random` numbers will come from for each of the equations
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function CreateEquation(min, max, operator){
    if(operator === '+'){
        return `${GetRandomNumber(min, max)} + ${GetRandomNumber(min, max)}`
    }
    else if (operator === '-'){
        return `${GetRandomNumber(min, max)} - ${GetRandomNumber(min, max)}`
    }
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
    if (userAnswer === realAnswer){
        return 'correct'
    } else {
        return 'wrong'
    }
}
