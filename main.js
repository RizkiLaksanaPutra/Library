const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookYear = document.getElementById("year");
const bookPages = document.getElementById("pages");
const bookStatus = document.getElementById("status");
const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  clearForm();
  console.log(library);
});

let library = [];

function Book(id, title, author, year, pages, status) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const newBook = new Book(
    id = self.crypto.randomUUID(),
    bookTitle.value,
    bookAuthor.value,
    bookYear.value,
    bookPages.value,
    bookStatus.value
  );
  library.push(newBook);
}

function clearForm() {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookYear.value = "";
  bookPages.value = "";
  bookStatus.value = "Read";
}
