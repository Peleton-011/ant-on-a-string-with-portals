import {StringGenerator} from "./string-generator.js";

function component() {
    const element = document.createElement("div");
    const btn = document.createElement("button");

    // Lodash, now imported by this script

    btn.innerHTML = "Click me and check the console";
    btn.onclick = StringGenerator;

    element.appendChild(btn);


    return element;
}

document.body.appendChild(component());
