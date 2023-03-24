class StringGenerator {
    newString(length) {
        const string = [];

        for (let i = 0; i < length; i++) {
            this.#newNode();
        }

        return "Hmm... Testy testy...";
    }

    #newNode() {
        
    }
}

export { StringGenerator };
