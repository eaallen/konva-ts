import Konva from "konva";
import { Shape, ShapeConfig } from "konva/lib/Shape";
import DefaultLayer from "../layers/DefaultLayer";

export default class Item {
    shape: Shape<ShapeConfig>
    layer: Konva.Layer
    constructor(shape: Shape<ShapeConfig>, layer: Konva.Layer = DefaultLayer) {
        this.shape = shape;
        this.layer = layer;
        this.layer.add(this.shape);
    }

    getShape() {
        return this.shape;
    }

    getLayer() {
        return this.layer;
    }

    get x() {
        return this.shape.x();
    }

    get y() {
        return this.shape.y();
    }

    get width() {
        return this.shape.width();
    }

    get height() {
        return this.shape.height();
    }

    get color(): string | CanvasGradient {
        return this.shape.fill();
    }

    set x(x: number) {
        this.shape.x(x);
    }

    set y(y: number) {
        this.shape.y(y);
    }

    set width(width: number) {
        this.shape.width(width);
    }

    set height(height: number) {
        this.shape.height(height);
    }

    set color(color: string) {
        this.shape.fill(color);
    }


}