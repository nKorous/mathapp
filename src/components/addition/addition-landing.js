import React, { Component } from 'react'

import AdditionModule from './addition'

export default class AdditionLanding extends Component {
    constructor(props){
        super(props)

        this.state= {
            showEquations: false
        }

        this.createEquations = this.createEquations.bind(this)
    }

    createEquations(min, max, quantity){
        let rows=[]

        for(let i=0; i < quantity; i++){
            rows.push(<AdditionModule min={min} max={max} />)
        }

        return rows
    }



    render(){
        return(
            <div>
                <div className='additionSelection'>

                </div>

                {this.createEquations(2, 10, 10)}

            </div>
        )
    }
}