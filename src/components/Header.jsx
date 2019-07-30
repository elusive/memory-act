import React, { Component } from 'react';


class Header extends Component {

  constructor(props) {
      super(props);

      this.state = {
          seconds: 0,
          minutes: 0
      };

      this.startTimer = this.startTimer.bind(this);
      this.stopTimer = this.stopTimer.bind(this);
      this.resetTimer = this.resetTimer.bind(this);
  }

  render() {
      return (
          <div className="header">
              <div className="time">{String(this.state.time).padStart(2,0)}</div>
          </div>
          );
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
      this.setState({
        isOn: true,
        time: 1
      });
      this.timerId = setInterval(() => this.setState({
        seconds: this.state.seconds + 1
      }), 1000);
    }

    stopTimer() {
      this.setState({isOn: false});
      clearInterval(this.timer);
    }

    resetTimer() {
      this.setState({time: 0, isOn: false});
    }
    add() {
      seconds++;
      if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
              minutes = 0;
              hours++;
          }
      }
  }
}

export default Header;