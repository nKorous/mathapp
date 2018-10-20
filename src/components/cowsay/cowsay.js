import React, { Component } from 'react'
import { say, SQUIRREL, TUX } from 'cowsay'

export default class FunCowsay extends Component {
    constructor(props){
        super(props)

        this.props = {
            cowText: '',
            cowCow: '',
            cowEyes: '',
            cowTongue: ''
        }
    }

    render(){
        return(
            <div className='cowFunClass'>
                {say({
                    text: 'This is a test',
                    cow: SQUIRREL,
                    eyes: 'xx',
                    tongue: ';;',
                    wrap: true,
                    wrapLength: 10,
                    mode: 'b'
                })}
            </div>
        )
    }
}

