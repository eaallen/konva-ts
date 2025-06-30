import Item from "./Item";
import { Line as KonvaLine } from "konva/lib/shapes/Line";
import { LineConfig } from "konva/lib/shapes/Line";
import DefaultLayer from "../layers/DefaultLayer";
import { Layer } from "konva/lib/Layer";

export default class Line extends Item {
    constructor(config: LineConfig, layer: Layer = DefaultLayer) {
        super(new KonvaLine(config), layer);

        this.stage.on('click', (e) => {
            console.log('click', this.stage.getPointerPosition());
        })
    }



    static example() {
        return new Line({
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'red',
            strokeWidth: 15,
            lineCap: 'round',
            lineJoin: 'round',
            draggable: true,
        })
    }
}