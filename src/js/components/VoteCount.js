import React from 'react';
import VoteStore from '../stores/VoteStore';
import VoteActions from '../actions/VoteActions';

export default class VoteCount extends React.Component {

  render() {
    var totalCount = this.props.votes.reduce((total, vote) => {
      return total += vote.voteCount;
    }, 0);
    var bars = this.props.votes.map((action, key) => {
      var width = 0;
      var displayCount = action.voteCount > 0 ? action.voteCount : null;
      if (totalCount > 0) {
        width = action.voteCount / totalCount;
      }
      width *= 100;
      var style = {
        width: width + "%"
      };
      return (
        <div className="row" key={action.name}>
          <div className="col-sm-3">{action.displayName}</div>
          <div className="col-sm-9">
            <div className="progress">
              <div className="progress-bar"
                   role="progressbar"
                   aria-valuenow={width}
                   aria-valuemin="0"
                   aria-valuemax="100"
                   style={style}>
                {displayCount}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1>Current Vote</h1>
        {bars}
      </div>
    )
  }
}
