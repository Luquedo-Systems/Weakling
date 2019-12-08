import EnemyEntity from "./enemyEntity.js";
import { effects } from "../actionsAndEffects/effects.js";
import { enemyActions } from "../actionsAndEffects/enemyActions.js";
export class Boar extends EnemyEntity {
    constructor() {
        super();
        this.spriteParams = { texture: 'boar-avatar', frame: null };
        this.level = 1;
        this.actions = ['wildRush', 'enrage'];
        this.name = 'Wild Boar';
        this.baseCharacteristics = {
            attributes: {
                strength: 10,
                agility: 10,
                intelligence: 1,
                initiative: Phaser.Math.Between(0, 30)
            },
            parameters: {
                health: 20,
                currentHealth: 20,
                manna: 0,
                currentManna: 0,
                energy: 10,
                currentEnergy: 10,
            },
            defences: {
                armor: 12,
                dodge: 10,
                fireResistance: 0,
                coldResistance: 5,
                acidResistance: 0,
                electricityResistance: 0,
                poisonResistance: 0,
                magicResistance: 0,
            }
        };
        this.currentCharacteristics = JSON.parse(JSON.stringify(this.baseCharacteristics));
        this.actionPoints = {
            physical: 2,
            magical: 0,
            misc: 1
        };
    }
    aiTurn(disposition) {
        const currentAICharacter = this;
        const alivePlayers = disposition.playerCharacters.filter(char => char.isAlive);
        const randomAlivePlayer = alivePlayers[Math.floor(Math.random() * alivePlayers.length)];
        const action = this.currentEffects.includes(effects.intelligenceDown) ? 'wildRush' : 'enrage';
        disposition.processAction(currentAICharacter, randomAlivePlayer, enemyActions[action]);
    }
}
//# sourceMappingURL=boar.js.map