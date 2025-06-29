import Konva from 'konva';
import DefaultLayer from './layers/DefaultLayer';
import Rect from './objects/Rect';

const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = DefaultLayer
stage.add(layer);

Rect.basic({x: 50, y: 5});
Rect.basic({x: 150, y: 50});
Rect.basic({x: 250, y: 50});
Rect.basic({x: 350, y: 50});


layer.draw(); 