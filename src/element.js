import h from 'virtual-dom/h';

export default class Element {
  constructor() {
    this.type = 'div';
    this.style = {};
    this.children = [];
  }

  render() {
    console.log(this.style)
    return h(
      this.type,
      { style: this.style },
      this.children.map(child => child.render())
    )
  }
}
