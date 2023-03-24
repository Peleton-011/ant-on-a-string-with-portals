import {StringGenerator} from "./string-generator.js";

function component() {
    const element = document.createElement("div");
    const output = document.createElement("p");

    // Lodash, now imported by this script

    output.innerHTML = StringGenerator.newString(3);

    element.appendChild(output);


    return element;
}

document.body.appendChild(component());
