class StringGenerator {
    #portalChance = 0.1;

    newString(length) {
        const string = [];

        for (let i = 0; i < length; i++) {
            this.#newNode();
        }

        return "Hmm... Testy testy...";
    }

    #newNode() {}

    set portalChance(value) {
        this.#portalChance =
            value > 1 ? 
            1 : 
            value < 0 ? 
                0 : 
                value ? 
                    value : 
                    this.#portalChance;
    }
}

class Node {
    #position;
    #portalTarget;

    constructor(position, portalTarget) {
        this.#position = position || null;
        this.#portalTarget = portalTarget || null;
    }
}

export { StringGenerator };
