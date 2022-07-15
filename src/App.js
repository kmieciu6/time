import './App.css';
import React from "react";
import time from './assets/clock-solid.svg'

class App extends React.Component {
    constructor(props) {
        const today = new Date(),
            time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        super(props)
        this.state = {
            currentTime: time,
            seconds: 0,
            text: "seconds ego"
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => {
                return {
                    seconds: prevState.seconds + 1
                };
            });
        }, 1000);
    }


    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <section className='time'>
                <h1>{this.state.currentTime}</h1>
                <div>
                    <img src={time} alt="time"/>
                    <h2>{this.state.seconds} {this.state.text}</h2>
                </div>
                <button onClick={() => window.location.reload()}>Refresh</button>
            </section>
        );
    }
}
export default App;