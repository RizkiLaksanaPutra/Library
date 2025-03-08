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

function loadLibrary() {
  const storedLibrary = localStorage.getItem("library");
  if (storedLibrary) {
    library = JSON.parse(storedLibrary);
  } else {
    library.push(...DEFAULT_DATA);
    saveLibrary();
  }
}

function saveLibrary() {
  localStorage.setItem("library", JSON.stringify(library));
}

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
    self.crypto.randomUUID(),
    bookTitle.value,
    bookAuthor.value,
    bookYear.value,
    bookPages.value,
    bookStatus.value
  );
  library.push(newBook);
  saveLibrary();
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
  library.forEach((book, index) => {
    const htmlTable = `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.pages}</td>
        <td><button class="status-button">${book.status}</button></td>
        <td><button class="delete-button" data-index="${index}">Delete</button></td>
      </tr>
    `;
    tableBody.insertAdjacentHTML("afterbegin", htmlTable);
  });

  document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      library.splice(index, 1);
      saveLibrary();
      render();
    });
  });

  document.querySelectorAll(".status-button").forEach((button) => {
    button.addEventListener("click", () => {
      const statusText = button.textContent;
      if (statusText === "Read") {
        button.textContent = "Not read";
      } else if (statusText === "Not read") {
        button.textContent = "Read";
      }
      const index = Array.from(button.closest("tr").children).indexOf(button.parentElement);
      library[index].status = button.textContent;
      saveLibrary();
    });
  });
}

loadLibrary();
render();
