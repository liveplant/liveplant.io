import VoteActions from '../actions/VoteActions';

var mockData = [
  { count: 0, name: 'water', displayName: 'Water' },
  { count: 0, name: 'nothing', displayName: 'Nothing' },
  { count: 0, name: 'lightOff', displayName: 'Light Off' },
  { count: 0, name: 'lightOn', displayName: 'Light On' },
];

export default {
  fetchVotes() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockData);
            } else {
              reject('Things have broken');
            }
          }, 250);
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
  }
};
