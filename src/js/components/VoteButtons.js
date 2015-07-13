import React from 'react';

export default class VoteButtons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      actions: props.actionCollection
    };
    this.vote.bind(this);
  }

  vote(action) {
    console.log(action);
  }

  render() {
    var buttons = this.state.actions.map((option, key) => {
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