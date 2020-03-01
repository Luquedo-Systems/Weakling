import { GAME_H, GAME_W } from "../config/constants.js";
import { optionsInstance } from "../config/optionsConfig.js";
export class OptionsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Options' });
    }
    init({ prevScene }) {
        this.parentSceneKey = prevScene;
    }
    preload() {
    }
    create() {
        const optionsBackground = this.add.graphics()
            .lineStyle(3, 0x222222)
            .fillStyle(0x2A3E07)
            .fillRect(GAME_W / 3 - 25, 150, GAME_W / 3 + 40, GAME_H - 300)
            .strokeRect(GAME_W / 3 - 25, 150, GAME_W / 3 + 40, GAME_H - 300);
        const title = this.add.text(GAME_W / 2, GAME_H / 2 - 120, 'Options', {
            font: '30px monospace',
            fill: '#ffffff'
        }).setOrigin(0.5, 0.5);
        const titleAudio = this.add.text(GAME_W / 2, GAME_H / 2 - 50, 'Audio', {
            font: '20px monospace',
            fill: '#ffffff'
        }).setOrigin(0.5, 0.5);
        const musicToggle = this.add.text(GAME_W / 2, GAME_H / 2 + 10, `Music is ${optionsInstance.isMusicOn ? 'ON' : 'OFF'}`, {
            font: '20px monospace',
            fill: '#ffffff'
        }).setOrigin(0.5, 0.5).setInteractive({ useHandCursor: true });
        musicToggle.on('pointerdown', () => {
            optionsInstance.toggleMusic();
            musicToggle.setText(`Music is ${optionsInstance.isMusicOn ? 'ON' : 'OFF'}`);
        });
        /*        const effectsToggle = this.add.text(GAME_W / 2, GAME_H / 2 + 40,
                    `Effects are ${optionsInstance.isEffectsOn ? 'ON' : 'OFF'}`,
                    {
                        font: '20px monospace',
                        fill: '#ffffff'
                    }
                ).setOrigin(0.5, 0.5).setInteractive({useHandCursor: true});
                effectsToggle.on('pointerdown', () => {
                    optionsInstance.toggleEffects();
                    effectsToggle.setText(`Effects are ${optionsInstance.isEffectsOn ? 'ON' : 'OFF'}`)
                });*/
        const backButton = this.add.text(GAME_W / 2, GAME_H * 2 / 3 + 20, 'Back to menu', {
            font: '20px monospace',
            fill: '#ffffff'
        }).setOrigin(0.5, 0.5).setInteractive({ useHandCursor: true });
        backButton.on('pointerdown', () => {
            this.scene.stop(this.scene.key);
            this.scene.run(this.parentSceneKey);
        });
        this.input.keyboard.on('keyup-O', () => {
            this.scene.stop(this.scene.key);
            this.scene.run(this.parentSceneKey);
        });
        this.input.keyboard.on('keyup-ESC', () => {
            this.scene.stop(this.scene.key);
            this.scene.run(this.parentSceneKey);
        });
        this.scene.bringToTop('Options');
    }
}
//# sourceMappingURL=options.js.map