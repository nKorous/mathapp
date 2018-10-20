import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/*** Internal Components */
import AppToolbar from './toolbar/toolbar'
import GameLanding from '../games/game-landing'
import MathLanding from '../games/math/math-landing'

export default class AppNavigation extends Component {
    constructor(props){
        super(props)

        this.state = {
            playerName: localStorage.getItem('playerName')
        }
    }

    render(){
        return (
            <div>
                <AppToolbar playerName={this.state.playerName} />

                <Router>
                    <Switch>
                        <Route path='/home/games' component={GameLanding} />
                        <Route exact path='/home/games/math' component={MathLanding} />
                    </Switch>
                </Router>
            </div>
        )
    }
}