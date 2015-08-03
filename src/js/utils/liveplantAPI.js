import _ from 'lodash';
import checkStatus from './checkStatus';
import parseJSON from './parseJSON';
import config from '../config';

class LiveplantAPI {
  constructor(options) {
    this.entry = options.apiEntry
    this.defaultHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    this.endpoints = _.transform({
      votes: '/votes'
    }, (result, endpoint, key) => {
      result[key] = this.entry + endpoint
    });
  }

  request(endpoint, method, body) {
    return fetch(this.endpoints[endpoint], {
      method: method || 'get',
      headers: this.defaultHeaders,
      body: JSON.stringify(body)
    }).then(checkStatus).then(parseJSON);
  }

  sendVote(action) {
    return this.request('votes', 'post', {
      action: action
    });
  }

  getVotes() {
    return this.request('votes');
  }
}

export default new LiveplantAPI({
  apiEntry: config.apiEntry
});
