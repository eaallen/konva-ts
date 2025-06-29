import Item from "../objects/Item";
import { Layer } from "konva/lib/Layer";

const layerTracker: Map<string, Item[]> = new Map();

export function addItem(item: Item) {
    const layer = item.layer;
    if(!layerTracker.has(layer.name())) {
        layerTracker.set(layer.name(), []);
    }
    layerTracker.get(layer.name())?.push(item);
}

export function removeItem(item: Item) {
    const layer = item.layer;
    if(layerTracker.has(layer.name())) {
        layerTracker.get(layer.name())?.splice(layerTracker.get(layer.name())?.indexOf(item) ?? -1, 1);
    }
}

export function getItems(layer: Layer) {
    return layerTracker.get(layer.name()) ?? [];
}

export function getAllItems() {
    return Array.from(layerTracker.values()).flat();
}