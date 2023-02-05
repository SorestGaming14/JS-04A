var name = prompt('Введите своё имя')

do {
    var birth = +prompt('Введите свой год рождения в цифрах')
} while (isNaN(birth) || birth == '');

do {
    var year = +prompt('Введите нынешний год в цифрах')
} while (isNaN(year) || year == '');

var age = year - birth

document.body.innerHTML = `<p> ${name}, ваш возраст: ${age}</p>`
console.log('Возраст пользователя ' + name + ' - ' + age);