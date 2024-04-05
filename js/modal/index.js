const openBtn = document.querySelector('#open-modal-btn');
const closeBtn = document.querySelector('#close-modal-btn');
const overlay = document.querySelector('#overlay');
const modal = document.querySelector('#modal');

openBtn.addEventListener('click', () => {
  overlay.classList.add('open');
  modal.classList.add('open');
});

function closeModal() {
  overlay.classList.remove('open');
  modal.classList.remove('open');
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
