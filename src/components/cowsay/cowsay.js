import React, { Component } from 'react'
import { say, SQUIRREL, TUX, KOALA,  DRAGON_AND_COW, VADER_KOALA, LUKE_KOALA, BUNNY, FLAMING_SHEEP, CHEESE} from 'cowsay'

export default class FunCowsay extends Component {
    constructor(props){
        super(props)

        this.makeSay = this.makeSay.bind(this)
    }

    makeSay(){
            {console.log(say({
                text: 'Kayton, Do what your dad tells you... Goober',
                cow: CHEESE,
                eyes: '..',
                tongue: ';;',
                wrap: true,
                wrapLength: 40,
                mode: 'a'
            })
            )
        }
            
    }

    render(){
        return(
            <div className='cowFunClass'>
                { this.makeSay() }
            </div>
        )
    }
}

