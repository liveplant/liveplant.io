import alt from '../alt';
import VoteActions from '../actions/VoteActions';
import VoteSource from '../sources/LocationActions';
import _ from 'lodash';

class VoteStore {
  constructor() {
    this.votes = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateVotes: VoteActions.UPDATE_VOTES,
      handleFetchVotes: VoteActions.FETCH_VOTES,
      handleFetchVotesFailed: VoteActions.FETCH_VOTES_FAILED,
      incrementVote: VoteActions.INCREMENT_VOTE
    });

    this.exportAsync(VoteSource);
  }

  handleUpdateVotes(choice) {
    this.votes = choice;
  }

  handleFetchVotes() {
    this.votes = [];
  }

  incrementVote(action) {
    var index = _.findIndex(this.votes, {name: action});
    this.votes[index].count += 1;
  }

  handleFetchVotesFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(VoteStore, 'VoteStore');
