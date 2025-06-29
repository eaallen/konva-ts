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