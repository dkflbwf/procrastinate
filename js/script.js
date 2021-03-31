let phrases = [
    { text: 'отправить другу смешную гифку', image: 'img/friend-gif.gif' },
    { text: 'посмотреть скидки на авиабилеты', image: 'img/travel.png' },
    { text: 'разобраться, о чём поют рэперы', image: 'img/rap.png' },
    { text: 'Юрий Дудь', image: 'img/dud.png' },
    { text: 'расставить книги на полке по цвету', image: 'img/books.png' },
    { text: 'читать про зарплаты в Сан-Франциско', image: 'img/salary.png' },
    { text: 'прочитать новости и ужаснуться в комментариях', image: 'img/news.png' },
    { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'img/music.png' },
    { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'img/1season.png' },
    { text: 'проверить непрочитанное в Telegram-каналах', image: 'img/chat.png' }
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text)
    smoothly(image, 'src', randomElement.image);
    if (randomElement.text.length > 40) {
        advice.style.fontSize = '33px';
    } else {
        advice.style.fontSize = '42px';
    }
});
for (let i = 0; i <= 2; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
}