import {backpackSlotNames, containerSlotNames} from "./itemSlots.js";

export const glovesItems: { [key: string]: ItemData } = {
    'work-gloves': {
        itemId: 'work-gloves',
        displayName: 'Work gloves',
        description: 'Rough-made and simple, but think and reliable gloves ideal for heavy-lifting',
        possibleSlots: ['gloves', ...backpackSlotNames, ...containerSlotNames],
        sprite: {texture: 'icon-item-set', frame: 128},
        stackable: false,
        modified: false,
        specifics: {
            additionalCharacteristics: [
                {'attributes.strength': 1}
            ],
            size: ['xs', 's', 'm'],
        },
        sellPrice: 5,
        buyPrice: 10
    },
    'leather-gloves': {
        itemId: 'leather-gloves',
        displayName: 'Leather gloves',
        description: 'Basic leather gloves',
        possibleSlots: ['gloves', ...backpackSlotNames, ...containerSlotNames],
        sprite: {texture: 'icon-item-set', frame: 128},
        stackable: false,
        modified: false,
        specifics: {
            additionalCharacteristics: [
                {'attributes.strength': 1},
                {'parameters.health': 1}
            ],
            size: ['xs', 's', 'm'],
        },
        sellPrice: 10,
        buyPrice: 20
    },
};
