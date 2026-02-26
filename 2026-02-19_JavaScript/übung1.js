const numberCount = 5;
const min = -2;
const max = 100;
const range = max-min;
const array = [];
for (let i = 0; i < numberCount; i++){
    array.push(Math.random() * range);
}
console.log(array);