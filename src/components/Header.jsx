import React, { Component } from 'react';


class Header extends Component {

  constructor(props) {
      super(props);
      this.state = {
          seconds: 0,
          minutes: 0,
          isOn: false
      };

      this.startTimer = this.startTimer.bind(this);
      this.stopTimer = this.stopTimer.bind(this);
      this.resetTimer = this.resetTimer.bind(this);
  }

  render() {
      return (
          <div className="header">
              <div className="time">{String(this.state.minutes).padStart(2,0) + ':' + String(this.state.seconds).padStart(2,0)}</div>
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
      this.timer = setInterval(() => {
        this.setState({
          seconds: this.state.seconds + 1
        });
        if (this.state.seconds >= 60)
        {
            this.setState({
              seconds: 0,
              minutes: this.state.minutes + 1
            });
        }
      }, 1000);
    }

    stopTimer() {
      this.setState({isOn: false});
      clearInterval(this.timer);
    }

    resetTimer() {
      this.setState({
        seconds: 0,
        minutes: 0,
        isOn: false
      });
    }
}

export default Header;
