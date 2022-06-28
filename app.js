// set storage
let myLibrary = [];

// create book objects holding info per book
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}
// Store info from form into an object, then push new book to library
function addBookToLibrary() {
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  if (read) {
    read = "yes";
  } else {
    read = "no";
  }
  const add = new Book(author, title, pages, read);
  myLibrary.push(add);
}
// erase "shelf" and populate by looping of latest library info
function printLibrary() {
  const container = document.getElementById("libraryShelf");
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement('div');
    card.innerHTML = `
    <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${myLibrary[i].title}</h5>
        <p class="card-text">Author: ${myLibrary[i].author}</p>
        <p class="card-text"># Pages: ${myLibrary[i].pages}</p>
        <p class="card-text">Read: ${myLibrary[i].read}</p>
        <a href="#" class="btn btn-warning delete" data-index="${i}">Delete</a>
        <a href="#" class="btn btn-warning toggle" data-toggle="${i}">Read</a>
      </div>
    </div>
    </div>`
  ;
    container.appendChild(card);
  }
}
// remove instance from myLibrary array
function deleteBookFromLibrary(erase) {
  myLibrary.splice(erase, 1);
  if (myLibrary.length < 1) {
    myLibrary = [];
  }
}
// Toggle Read instance from myLibrary array
function readBookFromLibrary(toggle) {
  if (myLibrary[toggle].read === "yes") {
    myLibrary[toggle].read = "no";
  } else {
    myLibrary[toggle].read = "yes";
  }
}
// When submit is clicked, prevent default of submit and run functions
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  addBookToLibrary();
  printLibrary();
  event.preventDefault();
})
// When delete is clicked, run functions
const shelf = document.getElementById("libraryShelf");
shelf.addEventListener("click", function(event) {
  if (event.target.textContent === "Delete") {
    const erase = event.target.dataset.index;
    deleteBookFromLibrary(erase);
    printLibrary();
  } else {
    const toggle = event.target.dataset.toggle;
    readBookFromLibrary(toggle);
    printLibrary();
  }
})
