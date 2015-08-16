import checkStatus from './checkStatus';
import parseJSON from './parseJSON';
import config from '../config';

export default function vote(action) {
  return fetch(`${config.apiEntry}/votes`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      action: action
    })
  });
}
