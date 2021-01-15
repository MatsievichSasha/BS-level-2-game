const API_URL = 'https://api.github.com/repos/sahanr/street-fighter/contents/fighters.json';
const responsePromise = fetch(API_URL);
/* console.log(responsePromise); */

/* responsePromise
  .then(response => { console.log(response) }) */

/* responsePromise
  .then(response => { response.json() }) */ //json також ассинхр отримаємо такж проміс

const rootElement = document.getElementById('root');
const loadingElement = document.getElementById('loading-overlay');
/* rootElement.innerText = 'Loading...'; */

fetch(API_URL)
  .then(
    /* response => { return response.json(); }, */
    /* error => { console.warn(error); } )*/ //друга фнукція обробка помилок
    response => {
      if (!response.ok) {
        throw new Error('Failed load data'); //якщо запрос виповнився але такого обєкту не існує
      }
      return response.json();
    })
  .then(file => {
    /* console.log(file) */
    const fighters = JSON.parse(atob(file.content));//розкодування "base64" глобаний метод atob поверне результат як строку
    /* console.log(fighters); */
    const names = fighters.map(it => it.name).join('\n');
    console.log(names);
    rootElement.innerText = names;
    loadingElement.remove();
  })
  .catch(error => {
    console.warn(error);
    root.innerText = 'Failed to load data';
  });

