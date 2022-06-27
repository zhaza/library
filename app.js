// set storage
let myLibrary = [];

// book function
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("readYes").value;
  const add = new Book(author, title, pages, read);
  myLibrary.push(add);
}

function printLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    const container = document.getElementById("libraryShelf");
    let card = document.createElement('div');
    card.id = myLibrary[i].title;
    card.innerHTML = `
    <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${myLibrary[i].title}</h5>
        <p class="card-text">Author: ${myLibrary[i].author}</p>
        <p class="card-text"># Pages: ${myLibrary[i].pages}</p>
        <p class="card-text">Read: ${myLibrary[i].read}</p>
        <a href="#" class="btn btn-warning">Delete</a>
      </div>
    </div>
    </div>`
  ;
    container.appendChild(card);
  }
}

const form = document.getElementById("bookForm");
form.addEventListener("submit", function(event) {
  addBookToLibrary();
  printLibrary();
  event.preventDefault;
});
