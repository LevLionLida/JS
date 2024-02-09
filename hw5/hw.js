document.getElementById('calculateBtn').addEventListener('click', function () {
    const result = document.getElementById('result');

    let number = document.getElementById('number').value.trim();
    number = parseInt(number);
    if (!isNaN(number)) {
        let factorial = 1;
        let i = 1;
        while (i <= number) {
            factorial = factorial * i
            i = i + 1
        }
        result.textContent = factorial;

    } else {
        result.textContent = "Please enter a valid number";
    }
});
