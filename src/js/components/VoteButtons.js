var React = require('react');

class VoteButtons extends React.Component {

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
    var buttons = this.state.actions.map((option) => {
      return (
        <button type="button"
                onClick={this.vote.bind(this, option.name)}
                className="btn btn-default btn-block">{option.displayName}</button>
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

module.exports = VoteButtons;
