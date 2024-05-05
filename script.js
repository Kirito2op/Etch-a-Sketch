const generateBoxes = (boxes) => {
    const cont = document.getElementById("container");
    const color = document.getElementById("colord");
    while(cont.firstChild){
        cont.removeChild(cont.firstChild);
    }
    const noOfBoxes = 500/boxes;
    for(var i=0;i<boxes*boxes;i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.style.width = noOfBoxes + "px";
        newDiv.style.height = noOfBoxes + "px";
        newDiv.addEventListener("mouseenter",() => {
            newDiv.style.backgroundColor = color.value;
        });
        cont.appendChild(newDiv);
    }
};

generateBoxes(5);

const pixel = document.getElementById("pixeld");

pixel.addEventListener("change",function(){
    generateBoxes(pixel.value);
});
const resetAll = (() => {
    const cont = document.getElementById("container");
    const boxes = cont.children;
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor = "white";
    }
}); 
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click",() =>{
    resetAll();
});