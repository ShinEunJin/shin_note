class Component {
  constructor() {
    this.state = {};
    this.render();
    this.setup();
  }

  render() {}

  setup() {}

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }
}

export default Component;
