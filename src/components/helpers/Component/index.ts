class Component {
  $target: Element;

  constructor($target: Element) {
    this.$target = $target;
    this.render();
    this.mounted();
  }

  mounted() {}

  render() {}
}

export default Component;
