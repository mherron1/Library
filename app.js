let myLibrary = [];
function Book(name, author, genre, year, read) {
  (this.name = name),
    (this.author = author),
    (this.genre = genre),
    (this.year = year),
    (this.read = read);
}

Book.prototype.toggleRead = function () {
  if (this.read === "yes") {
    this.read = "no";
  } else {
    this.read = "yes";
  }
};
//adding some sample books
let book1 = new Book("Anna Karenina", "Leo Tolstoy", "Fiction", 1878, "yes");
myLibrary.push(book1);
let book2 = new Book("Moby Dick", "Herman Melville", "fiction", 1851, "no");
myLibrary.push(book2);
let book3 = new Book("Dr. Zhivago", "Boris Pasternak", "fiction", 1957, "no");
myLibrary.push(book3);

displayLibrary();

function addBookToLibrary() {
  let name = document.getElementById("nameInput").value;
  let author = document.getElementById("authorInput").value;
  let genre = document.getElementById("genreInput").value;
  let year = document.getElementById("yearInput").value;
  let read = document.getElementById("readInput").value;

  let newBook = new Book(name, author, genre, year, read);
  myLibrary.unshift(newBook);
  let container = document.querySelector("#container");

  clearLibrary(container);
  displayLibrary();

  removeForm();
  //clear form inputs
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
}

function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    let container = document.querySelector("#container");
    let displayBook = document.createElement("div");
    displayBook.classList.add("displayBook");
    container.appendChild(displayBook);

    let bookName = document.createElement("div");
    bookName.classList.add("bookName");
    bookName.textContent = `${myLibrary[i]["name"]}`;
    displayBook.appendChild(bookName);

    let bookAuthor = document.createElement("div");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.textContent = `By ${myLibrary[i]["author"]}`;
    displayBook.appendChild(bookAuthor);

    let bookGenre = document.createElement("div");
    bookGenre.classList.add("bookGenre");
    bookGenre.textContent = `Genre: ${myLibrary[i]["genre"]}`;
    displayBook.appendChild(bookGenre);

    let bookYear = document.createElement("div");
    bookYear.classList.add("bookYear");
    bookYear.textContent = `Year: ${myLibrary[i]["year"]}`;
    displayBook.appendChild(bookYear);

    let bookRead = document.createElement("div");
    bookRead.classList.add("bookRead");
    bookRead.textContent = `Read: ${myLibrary[i]["read"]}`;
    displayBook.appendChild(bookRead);

    let removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = `Remove Book`;
    displayBook.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      clearLibrary(container);
      displayLibrary();
    });

    let readToggle = document.createElement("button");
    readToggle.classList.add("readToggle");
    readToggle.textContent = `read status`;
    displayBook.appendChild(readToggle);
    readToggle.addEventListener("click", () => {
      myLibrary[i].toggleRead();
      clearLibrary(container);
      displayLibrary();
    });
  }
}

function clearLibrary(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function displayForm() {
  let formArea = document.querySelector("#form");
  let newBookButton = document.querySelector("#newBookButtonArea");
  newBookButton.style = "display: block";
  formArea.style = "display: block;";
}

function removeForm() {
  let formArea = document.querySelector("#form");
  let newBookButton = document.querySelector("#newBookButtonArea");
  newBookButton.style = "display: block";
  formArea.style = "display: none;";
}
