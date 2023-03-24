import {StringGenerator, Node} from "./string-generator.js";

function component() {
    const element = document.createElement("div");
    const output = document.createElement("p");

    // Lodash, now imported by this script

    const StrGen = new StringGenerator();

    const node = new Node()

    let result;
    for (let i = 0; i < 100; i++) {
        const target = ` \n ${node.testGenerateTarget(50)}`
        result += target;
    }

    output.innerHTML = result;

    element.appendChild(output);


    return element;
}

document.body.appendChild(component());
