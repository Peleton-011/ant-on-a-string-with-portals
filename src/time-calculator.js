
function getLength() {
}

function slowGetLength(string) {

    console.log("Calculating: ", JSON.stringify(string, null, 2));
    let pointer = 0;
    let totalLength = 0;

    let iterator;

    while (iterator !== "EOS") {
        iterator = next();
    }

    return totalLength - 1;

    function next () {
        
        if (pointer >= string.length) {
            return "EOS";
        } 

        const target = string[pointer].portalTarget;

        if (!target) return move()
        
        const isOpen = string[pointer].isOpen;
        if (!isOpen) {
            string[pointer].isOpen = true;
            return move();
        };

        string[pointer].isOpen = false;
        pointer = pointer - target;
    }

    function move () {
        pointer += 1;
        totalLength += 1;
    }
}

export {getLength, slowGetLength};