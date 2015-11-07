import VoteActions from '../actions/VoteActions';
import api from '../utils/liveplantAPI';

export default {
  fetchVotes() {
    return {
      remote() {
        return api.getVotes().then(function(data) {
          return data.actions || [];
        });
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: VoteActions.updateVotes,
      error: VoteActions.fetchVotesFailed,
      loading: VoteActions.fetchVotes
    }
  },

  fetchCurrentAction() {
    return {
      remote() {
        return api.getCurrentAction().then(function(data) {
          return data || {};
        });
      },

      local() {
        return null;
      },

      success: VoteActions.updateCurrentAction,
      error: VoteActions.fetchCurrentActionFailed,
      loading: VoteActions.fetchCurrentAction
    }
  }
};
