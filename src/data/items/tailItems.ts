import { backpackSlotNames, containerSlotNames } from './itemSlots';
import { ItemData } from '../../types/my-types';

export default {
  'fire-marble': {
    itemId: 'fire-marble',
    displayName: 'Fire marble',
    description: 'Enchanted stone which burns brightly upon impact.',
    possibleSlots: ['tail', ...backpackSlotNames, ...containerSlotNames],
    sprite: { texture: 'icons', frame: 'icons/gems/red-round-stone' },
    stackable: true,
    modified: false,
    specifics: {
      additionalActions: ['throwFireMarble'],
    },
    sellPrice: 1,
    buyPrice: 2,
  },
} as { [key: string]: ItemData };
