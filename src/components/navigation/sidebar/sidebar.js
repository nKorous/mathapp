import React, { Component } from 'react'
import './sidebar.css'
import {  Link } from 'react-router-dom'

export default class AppSidebar extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false
        }
    }
    render(){
        return (
            <div>
                this is a sidebar
            </div>
        )
    }
}