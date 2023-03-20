import Books from './Books.js';

const books = new Books();
const addBookBtn = document.getElementById('add-book-btn');

addBookBtn.addEventListener('click', () => {
  books.addBook();
});