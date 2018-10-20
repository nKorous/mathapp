import React, { Component } from 'react'

import AdditionModule from './addition'

/*** Material-ui */
import Input from '@material-ui/core/Input'

export default class AdditionLanding extends Component {
    constructor(props){
        super(props)

        this.state= {
            min: 2,
            max: 14,
            quantity: 10,
            showEquations: false
        }
    }

    /*** Depricated 
    createEquations(min, max, quantity){
        let rows=[]

        for(let i=0; i < quantity; i++){
            rows.push(<AdditionModule min={min} max={max} />)
        }

        return rows
    }
****/

    render(){
        return(
            <div>
                <div className='additionSelection' hidden={this.state.showEquations}>
                <ul>
                    <li>Lowest number you would like in the equation: <Input type={'number'} /></li>
                    <li>Highest number you would like in the equation: <Input type={'number'} /></li>
                    <li>How many equations would you like generated?: <Input type={'number'} /></li>
                </ul>

                </div>
                <div className='additionEquations'>
                    <AdditionModule min={this.state.min} max={this.state.max} quantity={this.state.quantity} />
                </div>
            </div>
        )
    }
}