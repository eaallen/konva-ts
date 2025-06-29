import Item from "./Item";
import DefaultLayer from "../layers/DefaultLayer";
import Konva from "konva";

export default class Rect extends Item {
  constructor(config: Konva.RectConfig) {
    const rect = new Konva.Rect(config);
    super(rect, DefaultLayer);
  }

  static basic({x, y}: {x: number, y: number}) {
    return new Rect({
        x,
        y,
        width: 100,
        height: 100,
        fill: 'red',
        draggable: true,
      });
  }
}