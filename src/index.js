import {StringGenerator, Node} from "./string-generator.js";

function component() {
    const element = document.createElement("div");
    const output = document.createElement("p");

    // Lodash, now imported by this script

    const StrGen = new StringGenerator();

    const testNode = new Node()

    // let result = "";
    // for (let i = 0; i < 100; i++) {
    //     const target = ` <br> ${testNode.testGenerateTarget(50)}`
    //     result += target;
    // }

    const string = StrGen.newString(4);

    output.innerHTML = printObject(string);

    element.appendChild(output);


    return element;
}

function printObject(object) {
    console.log(object);
    console.log (JSON.stringify(object,null, 4))
    return JSON.stringify(object,null, 4)
}

document.body.appendChild(component());
