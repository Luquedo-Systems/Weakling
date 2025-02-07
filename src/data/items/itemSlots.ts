import { Slots } from '../../types/my-types';

export const backpackSlotNames: Slots[] = [
  'backpack0_0', 'backpack1_0', 'backpack2_0', 'backpack3_0', 'backpack4_0',
  'backpack0_1', 'backpack1_1', 'backpack2_1', 'backpack3_1', 'backpack4_1',
  'backpack0_2', 'backpack1_2', 'backpack2_2', 'backpack3_2', 'backpack4_2',
  'backpack0_3', 'backpack1_3', 'backpack2_3', 'backpack3_3', 'backpack4_3',
  'backpack0_4', 'backpack1_4', 'backpack2_4', 'backpack3_4', 'backpack4_4',
];

export const dollSlotNames: Slots[] = [
  'rightHand', 'leftHand', 'belt', 'head', 'neck', 'ringLeft', 'ringRight', 'body', 'cape', 'gloves', 'tail', 'pants', 'boots', 'bag',
];

export const quickSlotNames: Slots[] = [
  'quickSlot0', 'quickSlot1', 'quickSlot2', 'quickSlot3', 'quickSlot4',
];

export const playerSlotNames: Slots[] = [...backpackSlotNames, ...dollSlotNames, ...quickSlotNames];

export const containerSlotNames: Slots[] = [
  'containerSlot0_0', 'containerSlot1_0', 'containerSlot2_0', 'containerSlot3_0', 'containerSlot4_0',
  'containerSlot0_1', 'containerSlot1_1', 'containerSlot2_1', 'containerSlot3_1', 'containerSlot4_1',
  'containerSlot0_2', 'containerSlot1_2', 'containerSlot2_2', 'containerSlot3_2', 'containerSlot4_2',
];

export const componentSlotNames: Slots[] = [
  'componentSlot0', 'componentSlot1', 'componentSlot2', 'componentSlot3', 'componentSlot4',
];

export const alchemyStandSlotNames: Slots[] = [
  ...componentSlotNames, 'vesselSlot', 'resultSlot',
];
