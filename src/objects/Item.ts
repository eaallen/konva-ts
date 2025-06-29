import Konva from "konva";
import { Shape, ShapeConfig } from "konva/lib/Shape";
import DefaultLayer from "../layers/DefaultLayer";
import { haveIntersection } from "../utils";
import * as LayerTracker from "../layers/LayerTracker";

export default class Item {
    shape: Shape<ShapeConfig>
    layer: Konva.Layer
    #previousAbsolutePosition: { x: number, y: number }
    #collidingItems: Item[] = [];
    constructor(shape: Shape<ShapeConfig>, layer: Konva.Layer = DefaultLayer) {
        this.shape = shape;
        this.layer = layer;
        this.layer.add(this.shape);
        LayerTracker.addItem(this);
        this.#previousAbsolutePosition = this.shape.getAbsolutePosition();

        this.shape.on('dragstart', () => {
            this.#previousAbsolutePosition = this.shape.getAbsolutePosition();
        })

        this.shape.on('dragend', () => {

        })

        this.shape.on('dragmove', () => {
            this.calculateCollidingItems();
        })
    }

    calculateCollidingItems() {
        const items = LayerTracker.getItems(this.layer)
            .filter(item => haveIntersection(this.shape.getClientRect(), item.shape.getClientRect()))
            .filter(item => item !== this);
        this.#collidingItems = items;
    }

    getShape() {
        return this.shape;
    }

    on(event: string, callback: (item: Item) => void) {
        this.shape.on(event, () => callback(this));
    }

    get previousAbsolutePosition() {
        return this.#previousAbsolutePosition;
    }

    get node(): Konva.Node {
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

    get collidingItems() {
        return this.#collidingItems;
    }

    get isColliding() {
        return this.collidingItems.length > 0;
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


    /** update this with values we want to save when serializing */
    toJSON() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            color: this.color,
        }
    }
}