const booksList = document.getElementById('books-list');
const addBooks = document.getElementById('add-book-section');
const contactUs = document.getElementById('contact-us');

const listLink = document.getElementById('list-link');
const addNewLink = document.getElementById('add-new-link');
const contactLink = document.getElementById('contact-link');

const NavHeader = document.getElementById('nav-header');
const todayDate = document.getElementById('date');

listLink.addEventListener('click', () => {
  booksList.classList.remove('hidden');
  contactUs.classList.add('hidden');
  addBooks.classList.add('hidden');
});

addNewLink.addEventListener('click', () => {
  booksList.classList.remove('active');
  contactUs.classList.remove('active');
  addBooks.classList.add('active');
});

contactLink.addEventListener('click', () => {
    booksList.classList.remove('active');
    contactUs.classList.add('active');
    addBooks.classList.remove('active');
});

todayDate.insertAdjacentHTML('afterbegin', navHeader);