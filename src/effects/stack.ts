import { Vector2d } from "konva/lib/types";
import Item from "../objects/Item";

export function startDragStackOnTop(item: Item): Item {
    item.node.on('dragstart', () => {
        item.node.moveToTop();
    })
    return item;
}

export function onClickStackOnTop(item: Item): Item {
    item.node.on('mousedown touchstart', () => {
        item.node.moveToTop();
    })
    return item;
}

export function onClickSelect(item: Item): Item {
    item.node.on('mousedown touchstart', () => {
        item.select();
    })
    return item;
}

export function offClickDeselect(item: Item): Item {
    item.stage.on('mouseup touchstart', (e) => {
        const clickPosition = item.stage.getPointerPosition() as Vector2d;
        const intersection = item.stage.getIntersection(clickPosition);
        console.log(intersection, item.shape);
        if (intersection !== item.shape) {
            item.deselect();
        }
    })
    return item;
}

export function selectClickHandler(item: Item): Item {
    onClickSelect(item);
    offClickDeselect(item);
    return item
}