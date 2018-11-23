import React from 'react';

function FancyBorder(props) {
    return (
        <div className={props.color}>
            {props.children}
        </div>
    )
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-msg">{props.message}</p>
            {props.children}
        </FancyBorder>
    )
}

export class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    handleChange(e){
        this.setState({
            login:e.target.value
        })
    }
    handleSignUp(){
        alert(`Welcome ,${this.state.login} !`)
    }
    render() {
        return (
            <Dialog
                title="Mars Exploration Program"
                message="How should we refer to you?">
                <input
                    type="text"
                    value={this.state.login}
                    onChange={this.handleChange} />
                <button
                    onClick={this.handleSignUp}>
                    sign up!
                </button>

            </Dialog>
        )
    }
}