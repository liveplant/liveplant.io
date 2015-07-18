import alt from '../alt';

class VoteActions {
  updateVotes(choice, target) {
    this.dispatch(choice);
  }

  incrementVote(action) {
    this.dispatch(action);
  }

  fetchVotes() {
    // we dispatch an event here so we can have "loading" state.
    this.dispatch();
  }

  fetchVotesFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(VoteActions);
