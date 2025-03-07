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
    const tableRow = document.createElement("tr");

    const titleData = document.createElement("td");
    titleData.textContent = book.title;
    tableRow.appendChild(titleData);

    const authorData = document.createElement("td");
    authorData.textContent = book.author;
    tableRow.appendChild(authorData);

    const yearData = document.createElement("td");
    yearData.textContent = book.year;
    tableRow.appendChild(yearData);

    const pagesData = document.createElement("td");
    pagesData.textContent = book.pages;
    tableRow.appendChild(pagesData);

    const statusDataRow = document.createElement("td");
    const statusData = document.createElement("button");
    statusData.textContent = book.status;
    statusData.classList.add("status-button");
    statusDataRow.appendChild(statusData);
    tableRow.appendChild(statusDataRow);

    const deleteButtonRow = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButtonRow.appendChild(deleteButton);
    tableRow.appendChild(deleteButtonRow);

    tableBody.appendChild(tableRow);
  });
}

render();
