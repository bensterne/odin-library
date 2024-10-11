
const myLibrary = [];

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

}

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien",295,false);
addBookToLibrary(theHobbit);

const booksId = document.getElementById('books');
const newList = document.createElement('ul');
for (var item of myLibrary){
    const newListItem = document.createElement('li');
    newListItem.textContent = item.info();
    newList.appendChild(newListItem);
}

booksId.appendChild(newList);