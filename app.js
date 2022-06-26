let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}
// function addBookToLibrary(book) {
//   myLibrary.push(Book());
// }

function printLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("p");
    card.classList.add("card");
    card.textContent = myLibrary[i];
    container.appendChild(card);
  }
}
// printLibrary();

function createForm() {
  const container = document.querySelector("container");
  const div = document.createElement("div");
  div.innerHTML = `<h1>hello</h1>`;
  container.appendChild(div);
}

const button = document.getElementById("newBook");
button.addEventListener("click", createForm);
// <form action="" method="get" class="">
//     <div class="">
//         <label for="author">Author: </label>
//         <input type="text" name="author" id="author" required>
//     </div>
//     <div class="">
//         <label for="author">Author: </label>
//         <input type="text" name="author" id="author" required>
//     </div>
//     <div class="">
//         <label for="author">Author: </label>
//         <input type="text" name="author" id="author" required>
//     </div>
//     <div class="">
//         <label for="author">Author: </label>
//         <input type="radio" name="" id="author" required>
//     </div>
//     <div class="">
//         <input type="submit" value="Subscribe!">
//     </div>
// </form>
