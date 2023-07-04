class Component {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.mounted();
  }

  mounted() {}

  render() {}
}

export default Component;
