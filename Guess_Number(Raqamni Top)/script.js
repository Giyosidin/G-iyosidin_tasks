'use strict';

//  DOM => Document Object Model => document bu obyektdir

const againBtn = document.querySelector('.again');
const pScore = document.querySelector('#pScore');
const checkBtn = document.querySelector('.check');
const messageElm = document.querySelector('.message');
const scoreElm = document.querySelector('.score');
const highscoreElm = document.querySelector('.highscore');
const number = document.querySelector('.number');

//message.textContent = 'Men topdim!!!';
//message.style.color = 'red';
//message.style.fontSize = '100px';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);
let attempts = 20,
  message = '',
  highScore = 0;

checkBtn.addEventListener('click', function () {
  const inputValue = document.querySelector('.guess').value;

  if (inputValue === '') {
    message = `Number don't entered 🛑`;
  } else if (attempts >= 1) {
    if (inputValue > randomNumber) {
      message = '⬆ The number is Huge';
      attempts--;
      scoreElm.textContent = attempts;
    } else if (inputValue < randomNumber) {
      message = '⬇ The number is Small';
      attempts--;
      scoreElm.textContent = attempts;
    } else {
      message = ' 🏆 Correct Number!';
      // agarda qolgan urinishlar soni ohirgi rekordan katta bo'lsa rekordni yangilaymiz.
      if (highScore < attempts) highScore = attempts;

      document.body.style.backgroundColor = '#60b347';
      highscoreElm.textContent = highScore;
      number.textContent = randomNumber;

      checkBtn.setAttribute('disabled', true);
      checkBtn.style.cursor = 'not-allowed';
    }
  } else {
    message = 'The number of attempts is over ❌';
  }
  messageElm.textContent = message;
});

againBtn.addEventListener('click', function () {
  message = 'To guess ... ';
  messageElm.textContent = message;
  document.body.style.backgroundColor = 'rgb(139, 60, 218)';
  attempts = 20;
  scoreElm.textContent = attempts;
  document.querySelector('.guess').value = '';
  checkBtn.removeAttribute('disabled');
  checkBtn.style.cursor = 'pointer';
  number.textContent = '?';
  randomNumber = Math.trunc(Math.random() * 20 + 1);
});
console.log(randomNumber);
