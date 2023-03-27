import Books from './modules/Books.js';
import {
  booksList,
  addBooks,
  contactUs,
  listLink,
  addNewLink,
  contactLink,
} from './modules/navigation.js';
import { DateTime } from './modules/luxon.js';

addBooks.style.display = 'none';
contactUs.style.display = 'none';
booksList.classList.add('active');
booksList.classList.add('focus');

listLink.addEventListener('click', () => {
  window.location.reload();
  addBooks.style.display = 'none';
  contactUs.style.display = 'none';
  booksList.style.display = 'flex';
  booksList.classList.add('active');
  booksList.classList.add('focus');
});

addNewLink.addEventListener('click', () => {
  booksList.style.display = 'none';
  contactUs.style.display = 'none';
  addBooks.style.display = 'flex';
  addBooks.classList.add('active');
  addBooks.classList.add('focus');
});

contactLink.addEventListener('click', () => {
  booksList.style.display = 'none';
  contactUs.style.display = 'flex';
  addBooks.style.display = 'none';
  contactUs.classList.add('active');
  contactUs.classList.add('focus');
});

const books = new Books();
const addBookBtn = document.getElementById('add-book-btn');

addBookBtn.addEventListener('click', () => {
  books.addBook();
});

const date = document.getElementById('date');
date.innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`;
