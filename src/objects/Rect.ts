import Item from "./Item";
import DefaultLayer from "../layers/DefaultLayer";
import Konva from "konva";

export default class Rect extends Item {
  constructor(config: Konva.RectConfig) {
    const rect = new Konva.Rect(config);
    super(rect, DefaultLayer);
  }

  static basic({ x, y }: { x: number, y: number }) {
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

export class Square extends Rect {
  constructor(config: Konva.RectConfig) {
    super(config);
  }

  static basic({ x, y }: { x: number, y: number }) {
    return new Square({
      x,
      y,
      width: 100,
      height: 100,
      draggable: true,
    });
  }

  static red({ x, y }: { x: number, y: number }) {
    const square = Square.basic({ x, y });
    square.color = 'red';
    return square;
  }
  static blue({ x, y }: { x: number, y: number }) {
    const square = Square.basic({ x, y });
    square.color = 'blue';
    return square;
  }
  static green({ x, y }: { x: number, y: number }) {
    const square = Square.basic({ x, y });
    square.color = 'green';
    return square;
  }
  static purple({ x, y }: { x: number, y: number }) {
    const square = Square.basic({ x, y });
    square.color = 'purple';
    return square;
  }
  static yellow({ x, y }: { x: number, y: number }) {
    const square = Square.basic({ x, y });
    square.color = 'yellow';
    return square;
  }
  static orange({ x, y }: { x: number, y: number }) {
    const square = Square.basic({ x, y });
    square.color = 'orange';
    return square;
  }
  static pink({ x, y }: { x: number, y: number }) {
    const square = Square.basic({ x, y });
    square.color = 'pink';
    return square;
  }

  static random({ x, y }: { x: number, y: number }) {
    const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'pink'];
    const square = Square.basic({ x, y });
    square.color = colors[Math.floor(Math.random() * colors.length)];
    return square;
  }
}