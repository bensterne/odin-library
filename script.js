
const myLibrary = [];
const booksId = document.getElementById('books');

function Book(title, author, pages, read) {
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
this.info = function() {
    return `${this.title} by ${author}, ${this.pages} pages, ${this.read ? "have read" : "not read yet"}`
};
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();

}

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien",295,false);
addBookToLibrary(theHobbit);


const newList = document.createElement('ul');

function displayBooks() {
    // Clear the current list
    booksId.innerHTML = '';

    // Create a new list and append each book as an item
    const newList = document.createElement('ul');
    for (const item of myLibrary) {
        const newListItem = document.createElement('li');
        newListItem.textContent = item.info();
        newList.appendChild(newListItem);
    }

    booksId.appendChild(newList);
}

booksId.appendChild(newList);

const newBook = document.getElementById('new-book');
const bookForm = document.getElementById('form');

newBook.addEventListener("click", function() {
    bookForm.style.display = 'block';
    newBook.style.cursor="default";
    newBook.style.pointerEvents="none";
})

const closeButton = document.getElementById('close');
closeButton.addEventListener("click", function() {
    bookForm.style.display = 'none';
    newBook.style.cursor="pointer";
    newBook.style.pointerEvents="auto";
})

const submitButton = document.getElementById('form-submit');
submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const yes = document.getElementById('yes').checked;
        const ifRead  = (yes == true);

       const newB  = new Book(title, author, pages, ifRead);
       addBookToLibrary(newB);
    }
)

