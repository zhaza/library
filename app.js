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
  const read = document.getElementById("readYes").value;
  const add = new Book(author, title, pages, read);
  myLibrary.push(add);
}
// erase "shelf" and populate by looping of latest library info
function printLibrary() {
  const container = document.getElementById("libraryShelf");
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement('div');
    card.id = i;
    card.innerHTML = `
    <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${myLibrary[i].title}</h5>
        <p class="card-text">Author: ${myLibrary[i].author}</p>
        <p class="card-text"># Pages: ${myLibrary[i].pages}</p>
        <p class="card-text">Read: ${myLibrary[i].read}</p>
        <a href="#" class="btn btn-warning delete">Delete</a>
      </div>
    </div>
    </div>`
  ;
    container.appendChild(card);
  }
}
// remove instance from myLibrary array
function deleteBookFromLibrary(erase) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (erase === "delete") {
      myLibrary.splice(i, 1);
    }
  }
}
// When submit is clicked, prevent default of submit and run functions
const submit = document.getElementById("submit");
submit.addEventListener("click", function(event) {
  event.preventDefault();
  addBookToLibrary();
  printLibrary();
})
// When delete is clicked, run functions
const remove = document.getElementById("libraryShelf");
remove.addEventListener("click", function(event) {
  const erase = event.target.textContent.toLowerCase();
  deleteBookFromLibrary(erase);
  printLibrary();
})
