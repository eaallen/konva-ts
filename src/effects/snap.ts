import Item from "../objects/Item";
import { otherItemGlowOnCollision } from "./collisions";
import { onClickStackOnTop } from "./stack";


export function snapback(item: Item): Item {
    item.node.on('dragend', () => {
        item.shape.absolutePosition(item.previousAbsolutePosition);
    })
    return item;
}


export function snapOnCollision(item: Item): Item {
    otherItemGlowOnCollision(item);
    onClickStackOnTop(item);
    item.node.on('dragend', () => {
        if (item.isColliding) {
            const otherItem = item.collidingItems[0];
            item.shape.absolutePosition(otherItem.shape.absolutePosition());
        }
    })
    return item;
}

export function snapToOneSide(item: Item): Item {
    onClickStackOnTop(item);
    item.node.on('dragend', () => {
        if (item.isColliding) {
            const otherItem = item.firstCollidingItem
            item.shape.absolutePosition(otherItem.shape.absolutePosition());
        }
    })
    return item;
}