import Cuboid from './cuboid';

export default class Player extends Cuboid {
  goRight() {
    this.marginLeft += 2;
    // this.style = {
    //   width: '10%',
    //   height: '10%',
    //   marginLeft: `${this.marginLeft += 2}px`,
    //   background: 'blue',
    // }
  }
}
