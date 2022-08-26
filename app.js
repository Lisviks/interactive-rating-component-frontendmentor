const rateBtns = document.querySelectorAll('.rate-btn');
const submitBtn = document.querySelector('.submit-btn');
const outputRating = document.querySelector('.output-rating');
const ratingStateCard = document.querySelector('.rating-state');
const thankYouStateCard = document.querySelector('.thank-you-state');

let rating;

const selectRating = (selectedBtn) => {
  rateBtns.forEach((btn) => {
    if (btn.value !== selectedBtn.value) {
      btn.classList.remove('selected');
    } else {
      btn.classList.add('selected');
      rating = btn.value;
    }
  });
};

rateBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    selectRating(e.target);
  });
});

submitBtn.addEventListener('click', () => {
  if (!rating) return;
  outputRating.innerText = rating;
  ratingStateCard.classList.add('hidden');
  thankYouStateCard.classList.remove('hidden');
});
