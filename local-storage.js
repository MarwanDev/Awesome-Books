const localStorageInputs = document.querySelectorAll(".local-storage");
const localStorage = {
    bookTitle: "",
    bookAuthor: "",
};

localStorageInputs.forEach((input) => {
    input.addEventListener('input', () => {
      localStorage[input.bookTitle] = input.value;
      localStorage[input.bookAuthor] = input.value;
      localBrowserStorage.setItem('information', JSON.stringify(localStorage));
    });
})

const StoredBrowserData = JSON.parse(localStorage.getItem('information'));
if (StoredBrowserData) {
    localStorageInputs.forEach((element) => {
      element.value = StoredBrowserData[element.bookTitle];
    });
  }