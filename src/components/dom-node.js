function drawNode(node) {
    const domNode = document.createElement("div");

    const style = "width: 30px; height: 30px; border: 1px solid black; border-radius: 15px; text-align: center; vertical-align: middle;";

    domNode.style = style;

    console.log(node.portalTarget)
    console.log(typeof node.portalTarget)
    if (typeof node.portalTarget === "number") {
        domNode.textContent = node.position - node.portalTarget;
    }

    return domNode;
}

function drawString(string) {
    
    const domString = document.createElement("div"); 

    for (let i = 0; i < string.length; i++) {
        const node = string[i];
        domString.appendChild(drawNode(node));        
    }

    return domString;
}

export { drawNode, drawString };
