import Element from './element';

export default class Cuboid extends Element {
  constructor() {
    super();
    this.marginLeft = 10;
    this.style = {
      width: '10%',
      height: '10%',
      marginLeft: `${this.marginLeft}px`,
      background: 'blue',
    }
  }
}
