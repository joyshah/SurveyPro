import React, { Component } from 'react'
import './GlobalNavbar.css';

export default class GlobalNavbar extends Component {
    render() {
        return (
            <div className="global-navbar">
                <nav>
                    <ul>
                        <li><img className="global-navbar-img" src="https://img.icons8.com/wired/50/000000/add.png" title="Add Survey" /></li>
                    </ul>
                    <ul>
                        <li><img className="global-navbar-img" src="https://img.icons8.com/wired/64/000000/survey.png" title="My Surveys" /></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
