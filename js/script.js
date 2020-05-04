console.log("Hello");
let map = new Map();
let input1 = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

input1.sort((a, b) => a - b);

let objOccurrence = {};

input1.forEach((value, index, array) => {
    objOccurrence[value] = objOccurrence[value] === undefined ? 1 : objOccurrence[value] + 1;
});

let output1 = Object.entries(objOccurrence).map((value) => {
    return value[1] === 1 ? Number(value[0]) : new Array(value[1]).fill(0).map((val) => Number(value[0]));
});

//---------------------------------------
let obj = {
    name: "hi",
};
