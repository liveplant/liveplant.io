var $ = require('jquery');
var _ = require('lodash');
import Action from './models/Action';
import React from 'react';
import VoteButtons from './components/VoteButtons';
import VoteCount from './components/VoteCount';

class Liveplant {
  constructor(options) {
    this.currentAction;
    this.actionCollection = [];
    this.userVote;
  }

  static init(options) {
    return new Liveplant(options);
  }

  get actions() {
    return this.actionCollection
  }

  set actions(list) {
    this.actionCollection = _.map(list, function(item) {
      return new Action({
        name: item.name,
        displayName: item.displayName
      });
    });
  }
}

var liveplant = Liveplant.init();

liveplant.actions = [
  {displayName: 'Nothing', name: 'nothing'},
  {displayName: 'Water', name: 'water'}
];


React.render(
  <VoteButtons actionCollection={liveplant.actions} />,
  document.getElementById('vote-buttons')
);

React.render(
  <VoteCount actionCollection={liveplant.actions} />,
  document.getElementById('vote-count')
);
