function getLength() {}

function slowGetLength(string) {
    console.log("Calculating: ", JSON.stringify(string, null, 2));
    let pointer = 0;
    let totalLength = 0;

    let iterator;

    //While not at End of String, keep iterating
    while (iterator !== "EOS") {
        iterator = next();
    }

    return totalLength - 1;

    function next() {
        //Check if we have reached the end
        if (pointer >= string.length) {
            return "EOS";
        }

        const target = string[pointer].portalTarget;
        //If it has no target, just move
        if (!target) return move();

        const isOpen = string[pointer].isOpen;
        //If the portal is not open, open it and move
        if (!isOpen) {
            string[pointer].isOpen = true;
            return move();
        }

        //If the portal is open, close it and move to the target
        string[pointer].isOpen = false;
        pointer = pointer - target;
    }

    function move() {
        pointer += 1;
        totalLength += 1;
    }
}

export { getLength, slowGetLength };
