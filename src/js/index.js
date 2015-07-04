var $ = require('jquery');
var _ = require('lodash');
var Vote = require('./models/Action');

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
        name: item
      });
    });
  }
}

var liveplant = Liveplant.init();
