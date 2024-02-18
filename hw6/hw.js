//Є масив
//
// [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null]
// Вивести цей масив без нуль-значень (null, 0, false ....).
const array = [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null];
const filteredArray = [];

array.forEach(item => {
    if (item !== false && item !== 0 && item !== -0 && item !== '' && item !== null && item !== undefined && !isNaN(item) || item === true) {
        filteredArray.push(item);
    }
});

console.log(filteredArray);

