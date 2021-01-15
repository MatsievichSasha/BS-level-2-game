const API_URL = 'https://api.github.com/repos/sahanr/street-fighter/contents/fighters.json';
const responsePromise = fetch(API_URL);
/* console.log(responsePromise); */

/* responsePromise
  .then(response => { console.log(response) }) */

/* responsePromise
  .then(response => { response.json() }) */ //json також ассинхр отримаємо такж проміс


fetch(API_URL)
  .then(response => response.json())
  .then(file => {
    /* console.log(file) */
    const fighters = JSON.parse(atob(file.content));//розкодування "base64" глобаний метод atob поверне результат як строку
    /* console.log(fighters); */

    const names = fighters.map(it => it.name).join('\n');
    console.log(names);
  });

