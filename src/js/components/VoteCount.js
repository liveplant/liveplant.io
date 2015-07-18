import React from 'react';
import VoteStore from '../stores/VoteStore';
import VoteActions from '../actions/VoteActions';

export default class VoteCount extends React.Component {

  render() {
    console.log(this.state);
    console.log(this.props);
    var panels = this.props.votes.map((action, key) => {
      return (
        <div className="col-sm-6" key={key}>
          <div className="panel panel-default">
            <div className="panel-heading">{action.displayName}</div>
            <div className="panel-body">
              <span className="big-ass-number">{action.count}</span>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1>Current Vote</h1>
        <div className="row">
          {panels}
        </div>
      </div>
    )
  }
}
