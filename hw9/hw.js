
const user = {
    name: prompt("Введіть ваше ім'я:"),
    years: Number(prompt("Введіть ваш вік:")),
    email: prompt("Введіть ваш емейл:")
};

for (const property in user) {
    console.log(`${property}: ${user[property]}`);
}
