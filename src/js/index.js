import _ from 'lodash';
import Action from './models/Action';
import React from 'react';
import VoteButtons from './components/VoteButtons';
import VoteCount from './components/VoteCount';
import CurrentAction from './components/CurrentAction';
import LivePlantApp from './components/LivePlantApp';

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

React.render(
  <LivePlantApp app={liveplant} />,
  document.getElementById('liveplant-app')
);
