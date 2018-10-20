import React, { Component } from 'react'
import './addition.css'

/*** Material-Ui ***/
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'

import { CreateEquation } from '../../services/math-service'

export default class AdditionModule extends Component {
    constructor(props){
        super(props)

        this.state = {
            equations: []
        }

        this.getEquationData = this.getEquationData.bind(this)
        this.makeEquationCard = this.makeEquationCard.bind(this)
    }

    getEquationData(){
        let eq = []

        for(let i=0; i < this.props.quantity; i++){
            eq.push(CreateEquation(this.props.min, this.props.max, '+'))
        }
        console.log(eq)

        this.setState({
            equations: eq
        })
    }

    makeEquationCard(e){
        return (
            <Paper className='equationCard' key={e.key}>
                <CardContent>

                    { `${e.numA} + ${e.numB} = `} <Input type={'number'} />
                </CardContent>
            </Paper>
        )
    }

    render(){
        return(
            <div>
                <h1>Equations min: {this.props.min}, max: {this.props.max}, qt: {this.props.quantity}</h1>
               { this.state.equations.map(this.makeEquationCard) }
            </div>
        )
    }
}