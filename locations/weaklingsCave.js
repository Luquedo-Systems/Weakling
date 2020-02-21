import { GeneralLocation } from "./generalLocation.js";
import { introDialog } from "../dialogs/introDialog.js";
export class WeaklingsCaveScene extends GeneralLocation {
    constructor() {
        super({ key: 'WeaklingsCave' });
    }
    preload() {
        super.preload();
    }
    init(data) {
        super.init(data);
    }
    create() {
        super.create('weaklingsCave', 304, 128);
        const chest1trigger = this.triggers.find(trigger => trigger.name === 'Chest 1');
        const destroyCallback = chest1trigger.callback;
        chest1trigger.callback = () => {
            destroyCallback();
            this.player.addItemToInventory('fancy-belt');
        };
        this.switchToScene('Dialog', {
            dialogTree: introDialog,
            closeCallback: (param) => { }
        }, false);
    }
    update() {
        this.updatePlayer();
    }
}
//# sourceMappingURL=weaklingsCave.js.map