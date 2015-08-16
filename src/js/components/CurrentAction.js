import React from 'react';
import VoteActions from '../actions/VoteActions';
// import VoteStore from '../stores/VoteStore';

export default class CurrentAction extends React.Component {
    render() {
      var currentAction = this.props.currentAction;
      return (
        <div>
          <h1>Current Action</h1>
          <span className="big-ass-text">{currentAction}</span>
        </div>
      )
    }
}