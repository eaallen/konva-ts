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