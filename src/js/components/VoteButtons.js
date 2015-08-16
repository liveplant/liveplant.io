import React from 'react';
import VoteActions from '../actions/VoteActions';

export default class VoteButtons extends React.Component {

  vote(action) {
    VoteActions.incrementVote(action);
  }

  render() {
    var buttons = this.props.votes.map((option, key) => {
      return (
        <button type="button"
                key={key}
                onClick={this.vote.bind(this, option.name)}
                className="btn btn-default btn-lg btn-block">{option.displayName}</button>
      );
    });
    return (
      <div>
        <h1>Vote</h1>
        <div className="btn-block btn-group-vertical" role="group" aria-label="...">
          {buttons}
        </div>
      </div>
    );
  }
}
