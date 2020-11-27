let myLibrary = [];

function Book(name, author, genre, year, read) {
  (this.name = name),
    (this.author = author),
    (this.genre = genre),
    (this.year = year),
    (this.read = read);
}

let book1 = new Book("Anna Karenina", "Leo Tolstoy", "Fiction", 1878, "yes");
myLibrary.push(book1);
let book2 = new Book("Moby Dick", "Herman Melville", "fiction", 1851, "no");
myLibrary.push(book2);
let book3 = new Book("Dr. Zhivago", "Boris Pasternak", "fiction", 1957, "no");
myLibrary.push(book3);

displayLibrary();

function addBookToLibrary() {
  var name = document.getElementById("nameInput").value;
  var author = document.getElementById("authorInput").value;
  var genre = document.getElementById("genreInput").value;
  var year = document.getElementById("yearInput").value;
  var read = document.getElementById("readInput").value;

  let newBook = new Book(name, author, genre, year, read);
  myLibrary.unshift(newBook);
  const container = document.querySelector("#container");
  clearLibrary(container);

  displayLibrary();
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
}

console.table(myLibrary);

function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    const container = document.querySelector("#container");
    const displayBook = document.createElement("div");
    displayBook.classList.add("displayBook");
    container.appendChild(displayBook);

    const bookName = document.createElement("div");
    bookName.classList.add("bookName");
    bookName.textContent = `${myLibrary[i]["name"]}`;
    displayBook.appendChild(bookName);

    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.textContent = `By ${myLibrary[i]["author"]}`;
    displayBook.appendChild(bookAuthor);

    const bookGenre = document.createElement("div");
    bookGenre.classList.add("bookGenre");
    bookGenre.textContent = `Genre: ${myLibrary[i]["genre"]}`;
    displayBook.appendChild(bookGenre);

    const bookYear = document.createElement("div");
    bookYear.classList.add("bookYear");
    bookYear.textContent = `Year: ${myLibrary[i]["year"]}`;
    displayBook.appendChild(bookYear);

    const bookRead = document.createElement("div");
    bookRead.classList.add("bookRead");
    bookRead.textContent = `Read: ${myLibrary[i]["read"]}`;
    displayBook.appendChild(bookRead);

    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = `Remove Book`;
    displayBook.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      clearLibrary(container);
      displayLibrary();
    });

    const readToggle = document.createElement("button");
    readToggle.classList.add("readToggle");
    readToggle.textContent = `read status`;
    displayBook.appendChild(readToggle);
    readToggle.addEventListener("click", () => {
      if (myLibrary[i]["read"] === "yes") {
        myLibrary[i]["read"] = "no";
      } else {
        myLibrary[i]["read"] = "yes";
      }
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

Book.prototype.toggleRead = function () {};

console.log;
