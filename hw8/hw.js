// Реалізуйте функцію removeElement(arr, elem, newElem),
// яка шукає елементи elem в масиві arr та замінює їх на newElem.


function removeElement(arr, elem, newElem) {
    return arr.map(item => item === elem ? newElem : item);
}

const arr=[8,8,1,2,8,1,2 ,8 ];
const newElemFunc=removeElement(arr, 8, 0);

console.log(newElemFunc);