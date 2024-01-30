
let countFinger = prompt('Enter the finger number');
countFinger = parseInt(countFinger);

const fingers = {
    1: 'Thumb',
    2: 'Index',
    3: 'Middle',
    4: 'Ring',
    5: 'Little'
};

let nameFinger = fingers[countFinger] || 'Unknown finger';

alert(nameFinger);

// // варіант по умові домашки
// let countFinger = prompt('Введіть номер пальця');
// let nameFinger = null;
// countFinger = parseInt(countFinger);
//
// switch (countFinger) {
//     case 1:
//         nameFinger = 'Великий';
//         break;
//     case 2:
//         nameFinger = 'Вказівний';
//         break;
//     case 3:
//         nameFinger = 'Середній';
//         break;
//     case 4:
//         nameFinger = 'Безіменний';
//         break;
//     case 5:
//         nameFinger = 'Мізинець';
//         break;
//     default:
//         nameFinger = 'Невідомий палець';
// }
//
// alert(nameFinger);
