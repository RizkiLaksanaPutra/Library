const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookYear = document.getElementById("year");
const bookPages = document.getElementById("pages");
const submitButton = document.getElementById("submitButton");
const contoh = document.getElementById("contoh");

let myLibrary = [];

function Book(title, author, year, pages) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  myLibrary = [
    bookTitle.value,
    bookAuthor.value,
    bookYear.value,
    bookPages.value,
  ];
  contoh.textContent = myLibrary;
});
