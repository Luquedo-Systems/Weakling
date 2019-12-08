export const effects = {
    armorUp: {
        effectId: 'armorUp',
        name: 'Armor up',
        description: `Armor is increased`,
        type: 'passive',
        targetCharacteristic: 'defences.armor',
        baseDuration: 3,
        levels: {
            1: +1.33,
            2: +1.66,
            3: +2
        },
        durationLeft: null,
        currentLevel: null,
        source: null,
        statusImage: { texture: 'icons', frame: 119 },
    },
    dodgeUp: {
        effectId: 'dodgeUp',
        name: 'Dodge up',
        description: 'Dodge is increased',
        type: 'passive',
        targetCharacteristic: 'defences.dodge',
        baseDuration: 3,
        levels: {
            1: +1.33,
            2: +1.66,
            3: +2
        },
        durationLeft: null,
        currentLevel: null,
        source: null,
        statusImage: { texture: 'icons', frame: 60 },
    },
    strengthUp: {
        effectId: 'strengthUp',
        name: 'Strength up',
        description: 'Strength is increased',
        type: 'passive',
        targetCharacteristic: 'attributes.strength',
        baseDuration: 3,
        levels: {
            1: +1.33,
            2: +1.66,
            3: +2
        },
        durationLeft: null,
        currentLevel: null,
        source: null,
        statusImage: { texture: 'icons', frame: 20 },
    },
    agilityUp: {
        effectId: 'agilityUp',
        name: 'Agility up',
        description: 'Agility is increased',
        type: 'passive',
        targetCharacteristic: 'attributes.agility',
        baseDuration: 3,
        levels: {
            1: +1.33,
            2: +1.66,
            3: +2
        },
        durationLeft: null,
        currentLevel: null,
        source: null,
        statusImage: { texture: 'icons', frame: 124 },
    },
    intelligenceUp: {
        effectId: 'intelligenceUp',
        name: 'Intelligence up',
        description: 'Intelligence is increased',
        type: 'passive',
        targetCharacteristic: 'attributes.intelligence',
        baseDuration: 3,
        levels: {
            1: +1.33,
            2: +1.66,
            3: +2
        },
        durationLeft: null,
        currentLevel: null,
        source: null,
        statusImage: { texture: 'icons', frame: 19 },
    },
    intelligenceDown: {
        effectId: 'intelligenceDown',
        name: 'Intelligence down',
        description: 'Intelligence is decreased',
        type: 'passive',
        targetCharacteristic: 'attributes.intelligence',
        baseDuration: 3,
        levels: {
            1: -1.33,
            2: -1.66,
            3: -2
        },
        durationLeft: null,
        currentLevel: null,
        source: null,
        statusImage: { texture: 'icons', frame: 62 },
    },
    initiativeUp: {
        effectId: 'initiativeUp',
        name: 'Initiative up',
        description: 'Initiative is increased',
        type: 'passive',
        targetCharacteristic: 'attributes.initiative',
        baseDuration: 3,
        levels: {
            1: +1.33,
            2: +1.66,
            3: +2
        },
        durationLeft: null,
        currentLevel: null,
        source: null,
        statusImage: { texture: 'icons', frame: 36 },
    },
    trapped: {
        effectId: 'trapped',
        name: 'Trap prepared',
        description: 'Trap is set on the character\'s path',
        type: 'conditional',
        targetCharacteristic: 'parameters.currentHealth',
        baseDuration: -1,
        levels: {
            1: +1.33,
            2: +1.66,
            3: +2
        },
        durationLeft: null,
        currentLevel: null,
        source: null,
        statusImage: { texture: 'icons', frame: 174 },
    },
    physicalDamage: {
        effectId: 'physicalDamage',
        name: null,
        description: null,
        type: 'direct',
        targetCharacteristic: 'parameters.currentHealth',
        baseDuration: null,
        levels: {
            1: 2,
            2: 3,
            3: 4
        },
        durationLeft: null,
        currentLevel: null,
        source: null,
        statusImage: { texture: 'icons', frame: 0 },
    }
};
//# sourceMappingURL=effects.js.map