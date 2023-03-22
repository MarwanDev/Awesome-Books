const booksList = document.getElementById('books-list-section');
const addBooks = document.getElementById('add-book-section');
const contactUs = document.getElementById('contact-us');

const listLink = document.getElementById('list-link');
const addNewLink = document.getElementById('add-new-link');
const contactLink = document.getElementById('contact-link');

addBooks.style.display = 'none';
contactUs.style.display = 'none';
booksList.classList.add('active');

listLink.addEventListener('click', () => {
  addBooks.style.display = 'none';
  contactUs.style.display = 'none';
  booksList.style.display = 'flex';
  booksList.classList.add('active');
});

addNewLink.addEventListener('click', () => {
  booksList.style.display = 'none';
  contactUs.style.display = 'none';
  addBooks.style.display = 'flex';
  addBooks.classList.add('active');
});

contactLink.addEventListener('click', () => {
  booksList.style.display = 'none';
  contactUs.style.display = 'flex';
  addBooks.style.display = 'none';
  contactUs.classList.add('active');
});