class Component {
  constructor({ $target }) {
    this.$target = $target;
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
