import React from 'react';

class VoteCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionCollection: props.actionCollection
    };
  }

  render() {
    var panels = this.state.actionCollection.map((action) => {
      return (
        <div className="col-sm-6">
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

module.exports = VoteCount;
