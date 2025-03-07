const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookYear = document.getElementById("year");
const bookPages = document.getElementById("pages");
const bookStatus = document.getElementById("status");
const tableBody = document.getElementById("book-table");

const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  clearForm();
  render();
  console.log(library);
});

let library = [];

const DEFAULT_DATA = [
  {
    id: self.crypto.randomUUID(),
    title: "A Book of Set Theory",
    author: "Charles C Pinter",
    year: 2014,
    pages: 256,
    status: "Read",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Vengeance is Mine, All Others Pay Cash",
    author: "Eka Kurniawan",
    year: 2017,
    pages: 216,
    status: "Not read",
  },
];

library.push(...DEFAULT_DATA);

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
    (id = self.crypto.randomUUID()),
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

function render() {
  tableBody.innerHTML = "";
  library.forEach((book) => {
    const htmlTable = `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.pages}</td>
        <td><button class="status-button">${book.status}</button></td>
        <td><button class="delete-button">Delete</button></td>
      </tr>
    `;
    tableBody.insertAdjacentHTML("afterbegin", htmlTable);
  });
}

render();
