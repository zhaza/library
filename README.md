# Library project suggested by The Odin Project
Developed an application to store books in a library to practice using constructors, loops, arrays, modules, and interacting with the DOM.

# How to interact with the Library App?
- Click on the "Add New Book" button
- Enter information on any book you have completed or would like to read
- Submit the book and it will then populate on the page.
- Repeat the above steps to add more books
- You can also delete the books you've added or change the "Read" status depending whether you have completed the book or not.

# Future optimizations
Instead of repopulating the whole array after deleting a book to update the data-index attributes, 
When deleting, I can loop through the array to find the index by matching book title and splice from there. 
This will increase load time and make the data-index attribute redundant.
