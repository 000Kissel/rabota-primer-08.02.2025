// Объявление переменных
const myBtn = document.querySelector('#myBtn');
const nameInput = document.querySelector('#name');
const list = document.querySelector('#list');

// Обработчик события кнопки
myBtn.addEventListener('click', () => {
    // Создание элемента "li" в памяти (на странице его пока что нет)
    const newItem = document.createElement('li');
    // Добавить элементу newItem класс item (элемент еще не на странице)
    newItem.classList.add('item');
    // Добавить элементу текстовое содержимое из поля ввода
    newItem.textContent = nameInput.value
    // Добавить элемент в список
    list.appendChild(newItem);
    // Отчистить поле ввода
    nameInput.value = '';

    // Создаем кнопку для удаления элемента списка
    const deleteButton = document.createElement('button')
    // Добавляем текст к нопке 
    deleteButton.textContent = 'Удалить';
    // Добавить кнопку в элемент списка
    newItem.appendChild(deleteButton)

    deleteButton.addEventListener('click', () => {
        // Удаление элемента из списка
        list.removeChild(newItem)
    })

})


// Получить случайное число 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Math.floor - Округлить до целого в меньшую сторону
// Math.random() - случайное число от 0 до 1
// Math.random() * (max - min + 1) + min - формула нахождения случайного числа в диапазоне от меньшего(min) до большего(max)


// Найти случайное число от 0 до 10

// Math.random() * (11)
// Найти случайное число от 1 до 10
// Math.random() * (10) + 1

// Найти случайное число от 2 до 10
// Math.random() * (10 - 2 + 1(9)) + 1

// Округлить и вынести в console случайное число от 2 до 10

console.log(Math.floor(Math.random() * 9 + 2));


for (let i = 0; i <= 3; i++) {

}