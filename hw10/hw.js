

function submitCityForm() {
    const cityProperties = [
        document.getElementById('name').value,
        Number(document.getElementById('area').value),
        Number(document.getElementById('population').value),
        document.getElementById('mainStreet').value,
        document.getElementById('mayorName').value,
    ];

    const cityObject = createCityObject(cityProperties);
    console.log(cityObject);
}

function createCityObject(properties) {
    return {
        'name': properties[0],
        'area': properties[1],
        'population': properties[2],
        'main street': properties[3],
        'mayor\'s name': properties[4],
    };
}

