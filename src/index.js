var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

import Field from './field';
import Player from './player';

const player = new Player();
const field = new Field(null, [player]);
var tree = field.render();
var rootNode = createElement(tree);
document.body.appendChild(rootNode);
// 3: Wire up the update logic
setInterval(function () {
      player.goRight();

      var newTree = field.render();
      var patches = diff(tree, newTree);
      console.log(patches)
      rootNode = patch(rootNode, patches);
      tree = newTree;
}, 1000);
