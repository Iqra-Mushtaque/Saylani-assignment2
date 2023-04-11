//Question: 1

function createAdder(num){
    return function (x){
        return x + num;
    }
}
const addFive = createAdder(5);
console.log(addFive(10));
console.log(addFive(20));

//Question:2

function searchArray(arr, val){
    if(arr.length===0){
        return false;
    }
    if(arr[0]===val){
        return true;
    }
    return searchArray(arr.slice(1),val);
}
const arr = [1,2,3,4,5]
console.log(searchArray(arr, 3));
console.log(searchArray(arr, 6));



//Question:3

function addNewPara(text){
    const newPara = document.createElement("p");
    newPara.textContent = text;
    document.body.appendChild(newPara);
}

//Question:4

function addListItem(text){
    let list = document.querySelector("ul");
    let listItem = document.createElement("li");

    listItem.textContent = text;

}
addListItem("New Item");

//Question:5

function changebgclr(element, color){
    element.changebgclr = color;
}
const myElement = document.getElementById("my element");
changebgclr(myElement, "red");

//Question:6

function saveToLocalStorage(key, value){
    const jsonValue = JSON.stringify(value);

    localStorage.setItem(key, jsonValue);
}

const myobj = {name: "Ahmed", age: 30};
saveToLocalStorage("mykey", myobj);

//Question:7

function getobj(key){
    const objString = localStorage.getItem(key);

    if(objString===null){
        return null;
    }
    const object = JSON.parse(objString);
    return object;
}
const myObj = getobj("mykey");

//Question:8

function saveObj(obj){
    for (const prop in obj){
        localStorage.setItem(prop, JSON.stringify(obj[prop]));
    }
    const newObj = {};
    for (let i=0; i<localStorage.length; i++){
        const prop = localStorage.key(i);
        newObj[prop] =JSON.parse(localStorage.getItem(prop));
    }
    return newObj;
}
