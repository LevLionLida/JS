
function clearFields() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').removeAttribute('readonly');
    document.getElementById('fahrenheit').removeAttribute('readonly');
}

function adjustInputFields() {
    let celsius = document.getElementById('celsius').value.trim();
    let fahrenheit = document.getElementById('fahrenheit').value.trim();

    if (celsius !== "") {
        console.log(celsius);
        document.getElementById('fahrenheit').setAttribute('readonly', true);
        document.getElementById('arrowToLeft').style.display = 'none';
        document.getElementById('arrowToRight').style.display = 'inline';
    } else if (fahrenheit !== "") {

        document.getElementById('celsius').setAttribute('readonly', true);
        document.getElementById('arrowToLeft').style.display = 'inline';
        document.getElementById('arrowToRight').style.display = 'none';
    } else {
        document.getElementById('celsius').removeAttribute('readonly');
        document.getElementById('fahrenheit').removeAttribute('readonly');
        document.getElementById('arrowToLeft').style.display = 'none';
        document.getElementById('arrowToRight').style.display = 'none';
    }
}

function convertValue() {
    var celsius = +document.getElementById('celsius').value.trim();
    var fahrenheit = +document.getElementById('fahrenheit').value.trim();

    if (celsius !==0 ) {
        var fahrenheitValue = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheitValue.toFixed(2);
    } else if (fahrenheit !== 0) {
        var celsiusValue = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsiusValue.toFixed(2);
    }
}
