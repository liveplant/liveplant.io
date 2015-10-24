import React from 'react';

export default class CountdownTimer extends React.Component {

  render() {
    var normalClass = this.props.normalClass;
    var alertClass = this.props.alertClass;
    var timerLabel = this.props.timerLabel;
    var timeRemaining = this.props[this.props.timeRemainingProp];

    function currentClass () {
      if(timeRemaining <= 10){
        return alertClass;
      }
      return normalClass;
    }

    return (
      <div>
        <div className={currentClass()}>{timerLabel} - {timeRemaining}</div>
      </div>
    )
  }
}
