class StringGenerator {
    #portalChance = 0.2;

    newString(length) {
        const string = [];

        //Add the Nodes
        for (let i = 0; i < length; i++) {
            string.push(this.#newNode(i));
        }

        return string;
    }

    #newNode(position) {
        const isPortal = Math.random() > this.#portalChance ? false : true;
        const node = new Node(position, isPortal);
        return node;
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
    isOpen = true;
    #maxLength;

    constructor(position, maxLength) {
        this.position = typeof position === "number" ? position : null;
        this.#maxLength = typeof maxLength === "number" ? maxLength : null;
        this.portalTarget = maxLength ? this.#generateTarget(maxLength) : null;        
        if (maxLength === true) { 
            console.log("maxLen is true at ", position)
            this.portalTarget = this.#generateTarget(position);
        }
    }

    // testGenerateTarget() {
    //     return this.#generateTarget(...arguments) ;
    // }

    #generateTarget(maxLength) {
        const target = clamp(Math.floor(Math.random() * (maxLength)) + 1, 0, maxLength);
        return target;
    }
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export { StringGenerator, Node };
