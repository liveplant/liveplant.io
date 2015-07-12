export default class Action {
  constructor(options) {
    this.count = 0;
    this.name = options.name || '';
    this.displayName = options.displayName || '';
  }
}