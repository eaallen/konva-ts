import Konva from 'konva';
import DefaultLayer from './layers/DefaultLayer';
import Rect from './objects/Rect';
import snapback from './effects/snapping/snapback';
import { testCollision } from './effects/collisions';
import { getAllItems } from './layers/LayerTracker';

const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = DefaultLayer
stage.add(layer);

Rect.basic({x: 50, y: 5});
Rect.basic({x: 500, y: 100});

snapback(testCollision(new Rect({
  x: 0,
  y: 50,
  width: 100,
  height: 100,
  fill: 'blue',
  draggable: true,
})));

setInterval(() => {
  console.log(getAllItems().map(item=> JSON.parse(JSON.stringify(item))));
}, 5000)



layer.draw(); 