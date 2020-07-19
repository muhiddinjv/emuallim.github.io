let myBlock;
let myFunctionList;
let funList = [];
const movementArr = ["right", "left", "up", "down"];
document.addEventListener('DOMContentLoaded', function() {
    myBlock = document.createElement("div");
    myBlock.textContent = "Hello World!";
    let style = "background:red;color:white;width:100px;height:100px;text-align:center;position:absolute;top:100px;left:150px;";
    myBlock.style.cssText = style;
    document.body.appendChild(myBlock);
    myFunctionList = document.createElement("div");
    document.body.appendChild(myFunctionList);
    // myFunctionList.style.cssText = style + "background:blue;";
})

document.addEventListener("keydown", function(e) {
    e.preventDefault();
    let keyC = e.keyCode;
    if (keyC === 37) addFun("left");
    else if (keyC === 38) addFun("up");
    else if (keyC === 39) addFun("right");
    else if (keyC === 40) addFun("down");
    else if (keyC === 96) myBlock.style.background = randomColor();
    else if (keyC === 82) {
        let temp = movementArr[Math.floor(Math.random() * movementArr.length)];
        addFun(temp);
    } else if (keyC === 13 || keyC === 32) mover();
    console.log(e.keyCode);
})

function randomColor() {
    return "#" + Math.random().toString(16).substr(-6);
}

function mover() {
    if (funList.length > 0) {
        let cur = myBlock.getBoundingClientRect(); // current coordinates
        let el = funList.shift();
        let item = el.textContent.replace("+", "");
        myFunctionList.removeChild(el);
        myBlock.innerHTML = "Move " + item;
        if (item == "left") {
            myBlock.style.left = cur.left - cur.width + "px";
        }
        if (item == "right") {
            myBlock.style.left = cur.left + cur.width + "px";
        }
        if (item == "up") {
            myBlock.style.top = cur.top - cur.height + "px";
        }
        if (item == "down") {
            myBlock.style.top = cur.top + cur.height + "px";
        }
        setTimeout(mover, 300);
    } else {
        myBlock.innerHTML = "Set Path";
        return;
    }

}

function addFun(val) {
    let span = document.createElement('span');
    span.textContent = "+" + val;
    span.style.cssText = "padding:5px;border:1px solid #ddd;";
    span.addEventListener("mouseover", function() {
        this.style.background = "red";
        this.style.color = "white";
    })
    span.addEventListener("mouseout", function() {
        this.style.background = "white";
        this.style.color = "black";
    })
    span.addEventListener('click', function() {
        let curIndex = funList.indexOf(this);
        console.log(curIndex);
        let tempRemove = funList.splice(curIndex, 1);
        console.log(tempRemove);
        myFunctionList.removeChild(this);

    })
    myFunctionList.appendChild(span);
    funList.push(span);
    console.log(funList);

}

function goRight() {
    let temp = myBlock.offsetLeft;
    temp = temp + 50;
    myBlock.style.left = temp + "px";
}

function goLeft() {
    let temp = myBlock.offsetLeft;
    temp = temp - 50;
    myBlock.style.left = temp + "px";
}

function goUp() {
    let temp = myBlock.offsetTop;
    temp = temp - 50;
    myBlock.style.top = temp + "px";
}

function goDown() {
    let temp = myBlock.offsetTop;
    temp = temp + 50;
    myBlock.style.top = temp + "px";
}