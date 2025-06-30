import { getAllItems } from "../layers/LayerTracker";
import Item from "../objects/Item";

export function testCollision(item: Item): Item {
    item.layer.on('dragmove', () => {
        if (item.isColliding) {
            item.color = 'purple';
        } else {
            item.color = 'red';
        }
    })
    return item;
}

export function glowOnCollision(item: Item): Item {
    item.layer.on('dragmove', () => {
        if (item.isColliding) {
        } else {
        }
    })
    return item;
}

export function otherItemGlowOnCollision(item: Item): Item {
    item.layer.on('dragmove', () => {
        if (item.isColliding) {
            console.log(item.color, item.firstCollidingItem.color);

        } else {
        }
    })
    return item;
}