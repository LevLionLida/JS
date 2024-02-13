//Є масив
//
// [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null]
// Вивести цей масив без нуль-значень (null, 0, false ....).

const arr = [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null];
const numbersOnly = arr.filter(element =>
    typeof element === 'number' &&
    !isNaN(element) &&
    element !== 0);

console.log(numbersOnly);
