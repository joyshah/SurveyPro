import React, { Component } from 'react'
import GlobalNavbar from '../GlobalNavbar/GlobalNavbar'
import CreateSurvey from '../CreateSurvey/CreateSurvey'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='survey-container'>
                <GlobalNavbar></GlobalNavbar>
                <CreateSurvey></CreateSurvey>

            </div>
        )
    }
}
