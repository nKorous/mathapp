const uuid = require('uuid/v1')

export function CreateEquation(min, max, operator){
    
    let numA = GetRandomNumber(min, max)
    let numB = GetRandomNumber(min, max)
    
    if(operator === '+'){
        let additionEquation = {
            key: uuid(),
            numA: numA,
            numB: numB,
            equation: `${numA} + ${numB} =`,
            correctAnswer: numA + numB
        }

        return additionEquation

    }
    else if (operator === '-'){

        let check = () => {

            if(numA > numB) {
                return {Alpha : numA, Beta: numB}
            } else {
                return {Alpha: numB, Beta: numA}
            }
        }

        let subtractionEquation = {
            key: uuid(),
            numA: check.Alpha,
            numB: check.Beta,
            equation: `${check.Alpha} - ${check.Beta} =`,
            correctAnswer: check.Alpha - check.Beta
        }

        return subtractionEquation
    }
}

function GetRandomNumber(min, max) {
    //this is where the `random` numbers will come from for each of the equations
    return Math.floor(Math.random() * (max - min + 1) + min)
}

