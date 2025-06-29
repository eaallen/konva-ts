import Item from "../../objects/Item";
export default function snapback(item: Item): Item {
    item.node.on('dragend', () => {
        item.node.absolutePosition(item.previousAbsolutePosition);
    })
    return item;
}