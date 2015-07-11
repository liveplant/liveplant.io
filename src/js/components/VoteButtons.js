var React = require('react');

var options = [
  {displayName: 'Nothing', action: 'nothing'},
  {displayName: 'Water', action: 'water'}
];

class VoteButtons extends React.Component {
  render() {
    var buttons = options.map(function (option) {
      return (
        <button type="button"
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
