class StringGenerator {
    #portalChance = 0.1;

    newString(length) {
        const string = [];

        //Add the Nodes
        for (let i = 0; i < length; i++) {
            string.push(this.#newNode(i));
        }

        return string;
    }

    #newNode(position) {
        const isPortal = Math.random() > this.#portalChance ? true : false;
        const node = new Node(position, isPortal);
    }

    set portalChance(value) {
        this.#portalChance = clamp(value, 0, 1);
    }

    get portalChance() {
        return this.#portalChance;
    }
}

class Node {
    position;
    portalTarget;
    #maxLength;

    constructor(position, maxLength) {
        this.position = position || null;
        this.#maxLength = maxLength;
        this.portalTarget = maxLength ? this.#generateTarget(maxLength) : null;        
        if (maxLength === true) { 
            this.portalTarget = this.#generateTarget(position);
        }
    }

    testGenerateTarget() {
        return this.#generateTarget(...arguments) ;
    }

    #generateTarget(maxLength) {
        const target = Math.floor(Math.random() * (maxLength)) + 1;
        return target;
    }
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export { StringGenerator, Node };
