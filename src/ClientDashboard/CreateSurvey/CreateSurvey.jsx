import React, { Component } from 'react'
import './CreateSurvey.css';
export default class CreateSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveyNameDisabled: true,
            surveyTitleValue: ""
        }
        this.surveyTitleRef = React.createRef();
    }

    editSurveyTitle() {
        this.setState({ ...this.state, surveyNameDisabled: false });
        this.surveyTitleRef.current.classList.add('selected-input');
    }
    saveSurveyTitle() {
        this.setState({ ...this.state, surveyNameDisabled: true });
        this.surveyTitleRef.current.classList.remove('selected-input');

    }
    changeInputValue(e) {
        this.setState({ ...this.state, surveyTitleValue: e.target.value })
    }
    componentDidUpdate() {
        // console.log()
        // if (this.state.surveyNameDisabled) {
        //     this.surveyTitleRef.blur();
        // }
        // else {
        //     this.surveyTitleRef.focus()
        // }
    }
    render() {
        const { surveyNameDisabled, surveyTitleValue } = this.state;
        return (
            <div className="create-survey-container">
                <div className="local-navbar">
                    <>
                        <div className="survey-name">
                            <input
                                id="survey-name-field"
                                type='text'
                                name="surveyTitleName"
                                disabled={surveyNameDisabled}
                                placeholder='Survey Title'
                                ref={this.surveyTitleRef} value={surveyTitleValue}
                                autoFocus={!surveyNameDisabled}
                                onChange={(e) => this.changeInputValue(e)}
                            />
                            {surveyNameDisabled ?
                                < img
                                    src="https://img.icons8.com/material-two-tone/24/000000/edit--v1.png"
                                    onClick={() => this.editSurveyTitle()} /> :
                                <img
                                    src="https://img.icons8.com/metro/26/000000/save.png"
                                    onClick={() => this.saveSurveyTitle()} />
                            }
                        </div>
                    </>
                </div>
            </div>

        )
    }
}
