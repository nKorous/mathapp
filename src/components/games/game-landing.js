import React, { Component } from 'react'
import './game-landing.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

/*** Internal Components */
//import MathLanding from '../games/math/math-landing'

export default class GameLanding extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>Play games!!!!</h1>

                <div className='gameChoice'>
                    Select the type of games you would like to play?
                    <br />
                    <Link to='/home/games/math'>
                        <Button color='primary'>Math</Button>
                    </Link>
                </div>
            </div>
        )
    }
}