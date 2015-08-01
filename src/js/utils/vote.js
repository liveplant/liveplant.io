import checkStatus from './checkStatus';
import parseJSON from './parseJSON';

export default function vote(action) {
  return fetch('http://localhost:5000/votes', {
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
