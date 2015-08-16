import alt from '../alt';
import VoteActions from '../actions/VoteActions';
import VotesSource from '../sources/VotesSource';
import _ from 'lodash';

class VoteStore {
  constructor() {
    this.votes = [];
    this.errorMessage = null;
    this.currentAction = {};

    this.bindListeners({
      handleUpdateVotes: VoteActions.UPDATE_VOTES,
      handleFetchVotes: VoteActions.FETCH_VOTES,
      handleFetchVotesFailed: VoteActions.FETCH_VOTES_FAILED,
      incrementVote: VoteActions.INCREMENT_VOTE,
      handleFetchCurrentAction: VoteActions.FETCH_CURRENT_ACTION,
      handleUpdateCurrentAction: VoteActions.UPDATE_CURRENT_ACTION,
      handleFetchCurrentActionFailed: VoteActions.FETCH_CURRENT_ACTION_FAILED
    });

    this.exportAsync(VotesSource);
  }

  handleUpdateVotes(choice) {
    this.votes = choice;
  }

  handleFetchVotes() {
  }

  incrementVote(action) {
    var index = _.findIndex(this.votes, {name: action});
    this.votes[index].voteCount += 1;
  }

  handleFetchVotesFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  handleFetchCurrentAction() {

  }

  handleUpdateCurrentAction(action) {
    this.currentAction = action;
  }

  handleFetchCurrentActionFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(VoteStore, 'VoteStore');
