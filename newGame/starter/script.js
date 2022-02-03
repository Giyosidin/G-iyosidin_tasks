'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const againBtn = document.querySelector('.btn--new');
const imgDice = document.querySelector('.dice');
const section1 = document.querySelector('.player--0');
const section2 = document.querySelector('.player--1');

let randomNumber,
  currentScore = 0,
  activePlayer = 0,
  scores = [0, 0];

const changeActivePlayer = () => {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;
  section1.classList.toggle('player--active');
  section2.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 6) + 1;

  imgDice.classList.remove('hidden');
  imgDice.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    changeActivePlayer();
  }
});

btnHold.addEventListener('click', function () {
  // nomalum funksiya

  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    // Go'lib jamoa
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    btnRoll.setAttribute('disabled', true);
    btnHold.setAttribute('disabled', true);
    btnRoll.style.cursor = 'not-allowed';
    btnHold.style.cursor = 'not-allowed';
    imgDice.classList.add('hidden');
  } else {
    changeActivePlayer();
  }
});

againBtn.addEventListener('click', function () {
  document.body.style.backgroundColor = 'rgb(139, 60, 218)';
  currentScore = 0;
  currentScore = scores;
  document.querySelector('.btn--new').value = '';
  checkBtn.removeAttribute('disabled');
  checkBtn.style.cursor = 'pointer';
  randomNumber = Math.trunc(Math.random() * 6 + 1);
});
