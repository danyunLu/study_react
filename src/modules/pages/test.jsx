import React from 'react';
// import { Button } from 'antd';



export class FormattedDate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>heihei:</div>
                <div>{this.props.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    tick() {
        this.setState({
            date: new Date(),
            // comments: null,
            // post: null
        });
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);

    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    render() {
        return (
            <div>
                <div>{this.props.num}</div>
                <div>{this.state.date.toLocaleTimeString()}</div>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }
}

function LoginButton(props) {
    return <button onClick={props.handleLoginClick}>Login!</button>
}

function LogOutButton(props) {
    return <button onClick={props.handleLogoutClick}>Logout</button>
}

export class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginState: false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick() {
        this.setState({
            isLoginState: true
        })
    }

    handleLogoutClick() {
        this.setState({
            isLoginState: false
        })
    }

    render() {
        const isLoginState = this.state.isLoginState;
        let button = null;
        if (isLoginState) {
            button = <LogOutButton handleLogoutClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton handleLoginClick={this.handleLoginClick} />
        }

        return <div>
            <div>登录状态：{isLoginState ? 'Yes!' : 'No!'}</div>
            {button}
        </div>
    }
};

export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit(e) {
        console.log(`submit value:${this.state.value}`);
        e.preventDefault();
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type='text' value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type='submit' value='submit' />
        </form>
    }
}

export class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    handleSubmit(e) {
        console.log("value" + this.state.value);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>pick flavor ：
                <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grape">grape</option>
                        <option value="lime">lime</option>
                        <option value="cocount">cocount</option>
                        <option value="mango">mango</option>
                    </select>
                </label>
                <input type="submit" value='submit' />
            </form>
        )

    }
}

export class Reservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        type="checkbox"
                        name='isGoing'
                        checked={this.state.isGoning}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    guest number:
                    <input
                        type="number"
                        name='numberOfGuests'
                        value={this.state.numerOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        )
    }
}