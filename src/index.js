import {StringGenerator} from "./string-generator.js";

function component() {
    const element = document.createElement("div");
    const output = document.createElement("p");

    // Lodash, now imported by this script

    const StrGen = new StringGenerator();
    output.innerHTML = StrGen.newString();

    element.appendChild(output);


    return element;
}

document.body.appendChild(component());
