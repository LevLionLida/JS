// # Функція отримує на вході 2 числа.
// Якщо числа парні - повертає добуток чисел, якщо непарні - їх суму,
// інакше - повернути непарне число.
//
// - 6, 8 => 6 * 8
//
// - 3, 5 => 3 + 5
//
// - 3, 8 => 3



document.getElementById('calculateBtn').addEventListener('click', function() {
    let firstVal = document.getElementById('firstVal').value.trim();
    let secondVal = document.getElementById('secondVal').value.trim();

    document.getElementById('result').textContent = calculate(firstVal, secondVal);
});
function calculate(firstVal, secondVal) {
    firstVal = Number(firstVal);
    secondVal = Number(secondVal);

    if (firstVal % 2 === 0 && secondVal % 2 === 0) {
        return firstVal * secondVal;
    } else if (firstVal % 2 !== 0 && secondVal % 2 !== 0) {
        return firstVal + secondVal;
    } else {
        return firstVal % 2 !== 0 ? firstVal : secondVal;
    }
}

