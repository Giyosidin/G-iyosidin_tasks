'use strict';
const showBtn = document.querySelector('.show-modal');
const showBtnAll = document.querySelectorAll('.show-modal');
const modalContainer = document.querySelector('.modal');
const overlayDiv = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const teslaModal = document.querySelector('.tesla-modal');
const teslaModalS = document.querySelector('.modal');

const teslaModalOpen = () => {
  teslaModalS.classList.remove('hidden');
  overlayDiv.classList.remove('hidden');
};

const closeModal = () => {
  modalContainer.classList.add('hidden');
  overlayDiv.classList.add('hidden');
};

//hamma buttonlar modalni ochib beradi
// for (let i = 0; i < showBtnAll.length; i++) {
//   showBtnAll[i].addEventListener('click', function () {
//     teslaModal();
//   });
// }

// bu faqat 1-button uchun modalni ochib beradi
teslaModal.addEventListener('click', function () {
  teslaModalOpen();
});

closeModalBtn.addEventListener('click', closeModal);
overlayDiv.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) closeModal();
});
