const booksArray = [
  {
    id: 1,
    title: 'Lorem Ipsom',
    author: 'Bala7',
  },
  {
    id: 2,
    title: 'Lorem Ipsom',
    author: 'Bala7',
  },
];

const bookList = document.getElementById('books-list');
const booksDisplay = (id, title, author) => `    <h2>${title}</h2>
<h3>${author}</h3>
<button type="button" class="book-btn" id="book-btn-${id}">Remove</button>
<hr>`;

booksArray.forEach((book) => {
  const htmlToAdd = booksDisplay(book.id,
    book.title,
    book.author);
  bookList.insertAdjacentHTML('afterbegin', htmlToAdd);
});

const title = document.getElementById('title');
const author = document.getElementById('author');

const inputFileds = [
  title,
  author,
];
