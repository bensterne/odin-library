
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
        const ifReadButton =  document.createElement('button');
        ifReadButton.textContent = "Change Read Status";
        ifReadButton.className = "if-read-button";
        newListItem.appendChild(ifReadButton);
        const removeButton =  document.createElement('button');
        removeButton.textContent = "Remove Book";
        removeButton.className = "remove-button";
        newListItem.appendChild(removeButton);
        newList.appendChild(newListItem);
    }

    booksId.appendChild(newList);
}

booksId.appendChild(newList);

function changeReadStatus(event) {
    const item = event.target.parentElement.textContent.slice(0,-29);
    console.log(item);
    for (const i of myLibrary){
        console.log(i);
        console.log(i.info());
        console.log(item);
        console.log(i.read);
        if (item === i.info()){
            if(i.read){
                i.read = false;
            } else {
                i.read = true;
            }
        }
    }
    displayBooks();

}

// Select all buttons with the class 'my-button'
const ifReadButtons = document.querySelectorAll('.if-read-button');

// Loop through each button and add an event listener
ifReadButtons.forEach(button => {
    button.addEventListener('click', changeReadStatus);
});

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