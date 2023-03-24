function getLength(string) {
    let pointer = string.length;
    let totalLength = 0;

    const openPortals = [];

    //While not at End of String, keep iterating
    while (pointer < string.length) {
        next();
    }

    return totalLength - 1;

    function next() {
        openPortals.forEach((portal) => {
            if ((pointer = portal.pos)) {
                totalLength += totalLength - portal.originLen;
            }
        });

        const target = string[pointer].portalTarget;
        //If it has no target, just move
        if (!target) return move();

        //If it's a portal
        openPortals.push({ pos: pointer - target, originLen: totalLength });
    }

    function move() {
        pointer -= 1;
        totalLength += 1;
    }
}

function slowGetLength(string) {
    let pointer = 0;
    let totalLength = 0;

    //While not at End of String, keep iterating
    while (pointer < string.length) {
        next();
    }

    return totalLength - 1;

    function next() {
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
