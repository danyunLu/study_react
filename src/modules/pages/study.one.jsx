import React from 'react';


//react 状态提升学习
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水开了，咕噜咕噜~~</p>
    }
    return <p>水还没开……</p>
}

//华氏和摄氏转换
function formateToAnthor(type, temperature) {
    if (type == null || temperature == null || Number.isNaN(Number(temperature))) {
        alert('输入不合法');
        return
    }
    let newTemperature = 0;
    switch (type) {
        case 'f': newTemperature = (Number(temperature) * 9 / 5) + 32; break;
        case 'c': newTemperature = (Number(temperature) - 32) * 5 / 9; break;
    }
    newTemperature = Math.round(newTemperature * 1000) / 1000;
    return String(newTemperature);
}

const scaleNames = {
    c: '摄氏',
    f: '华氏'
}

//输入项
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     temperature: ''
        // }
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>输入一个{scaleNames[scale]}温度：</legend>
                <input
                    type="text"
                    value={temperature}
                    onChange={(e) => this.props.onTemperatureChange(scale, e)} />
                {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
            </fieldset>
        )
    }
}

//展示
export class Calcultor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '0',
            scale: 'c'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(scale, e) {
        this.setState({
            temperature: e.target.value,
            scale: scale
        })
    }
    render() {
        let scale = this.state.scale;
        let celsius = scale === 'c' ? this.state.temperature : formateToAnthor('c', this.state.temperature);
        let fahrenheit = scale === 'c' ? formateToAnthor('f', this.state.temperature) : this.state.temperature;
        console.log(scale, celsius, fahrenheit);
        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleChange} />
                <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleChange} />
            </div>
        )
    }
}