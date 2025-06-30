import Konva from 'konva';
import DefaultLayer from './layers/DefaultLayer';
import Rect, { Square } from './objects/Rect';
import { snapback, snapOnCollision } from './effects/snap';
import { testCollision } from './effects/collisions';
import { getAllItems } from './layers/LayerTracker';
import Line from './objects/Line';

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


snapOnCollision(Square.yellow({x: 500, y: 700}));
snapOnCollision(Square.pink({x: 500, y: 500}));

Line.example();





layer.draw(); 