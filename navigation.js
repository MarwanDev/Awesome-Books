const booksList = document.getElementById('books-list');
const addBooks = document.getElementById('add-book-section');
const contactUs = document.getElementById('contact-us');

const listLink = document.getElementById('list-link');
const addNewLink = document.getElementById('add-new-link');
const contactLink = document.getElementById('contact-link');

listLink.addEventListener('click', () => {
  booksList.classList.remove('hidden');
  contactUs.classList.add('hidden');
  addBooks.classList.add('hidden');
});

addNewLink.addEventListener('click', () => {
  booksList.classList.add('hidden');
  contactUs.classList.add('hidden');
  addBooks.classList.remove('hidden');
});

contactLink.addEventListener('click', () => {
    booksList.classList.add('hidden');
    contactUs.classList.remove('hidden');
    addBooks.classList.add('hidden');
  });