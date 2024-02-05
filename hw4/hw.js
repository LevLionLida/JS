
document.getElementById('calculateBtn').addEventListener('click', function() {
    let year = document.getElementById('year').value.trim();
    year = parseInt(year);

    if (!isNaN(year)) {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
            document.getElementById('result').textContent = "Leap year";
        } else {
            document.getElementById('result').textContent = "Not a leap year";
        }
    } else {
        document.getElementById('result').textContent = "Please enter a valid year";
    }
});
