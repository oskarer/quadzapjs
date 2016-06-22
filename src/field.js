import Element from './element';

export default class Field extends Element {
  constructor(props, children) {
    super();
    this.props = props;
    this.children = children;
    this.style = {
      width: '70vh',
      height: '70vh',
      border: '1px solid black',
    }
  }
}
