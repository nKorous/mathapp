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

        this.props = {
            min: 0,
            max: 0
        }

        this.GetEquation = this.GetEquation.bind(this)
    }

    GetEquation(min, max){
        return (
            <Paper className='equationCard'>
                <CardContent>
                    { CreateEquation(min, max, '+') } = <Input type={'number'} />
                </CardContent>
            </Paper>
        )
    }

    render(){
        return(
            <div>
                { this.GetEquation(this.props.min, this.props.max) }
            </div>
        )
    }
}