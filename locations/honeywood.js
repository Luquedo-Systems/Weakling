import { GeneralLocation } from "./generalLocation.js";
import { GregNpc } from "../npcs/honeywood/gregNpc.js";
import { MashaNpc } from "../npcs/honeywood/mashaNpc.js";
export class HoneywoodScene extends GeneralLocation {
    constructor() {
        super({ key: 'Honeywood' });
    }
    preload() {
        super.preload();
    }
    init(data) {
        super.init(data);
    }
    create() {
        super.create('honeywood');
        const greg = new GregNpc({ scene: this });
        const masha = new MashaNpc({ scene: this });
    }
    update() {
        super.update();
    }
}
//# sourceMappingURL=honeywood.js.map