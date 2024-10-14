
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
    booksId.innerHTML = '';

    const newList = document.createElement('ul');
    itemCount = 0;
    for (const item of myLibrary) {
        const newListItem = document.createElement('li');
        newListItem.textContent = item.info();
        newListItem.id=itemCount;
        const breakDiv = document.createElement('br');
        newListItem.appendChild(breakDiv);
        const ifReadButton =  document.createElement('button');
        ifReadButton.textContent = "Change Read Status";
        ifReadButton.className = "if-read-button";
        newListItem.appendChild(ifReadButton);
        const removeButton =  document.createElement('button');
        removeButton.textContent = "Remove Book";
        removeButton.className = "remove-button";
        itemCount++;
        newListItem.appendChild(removeButton);
        newList.appendChild(newListItem);
    }

    booksId.appendChild(newList);
    const ifReadButtons = document.querySelectorAll('.if-read-button');
    ifReadButtons.forEach(button => {
        button.addEventListener('click', changeReadStatus);
    });

    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeBook);
    });
    
}


const ifReadButtons = document.querySelectorAll('.if-read-button');

function changeReadStatus(event) {
    const item = event.target.parentElement.id;
    myLibrary[item].read = !myLibrary[item].read;
    displayBooks();
}
    
function removeBook(event) {
    const item = event.target.parentElement.id;
    myLibrary.splice(item,1);
    displayBooks();
}



const newBook = document.getElementById('new-book');
const bookForm = document.getElementById('form');

newBook.addEventListener("click", function() {
    if (bookForm.style.display == 'none'|| bookForm.style.display === ''){
        bookForm.style.display = 'block';
    } else {
        bookForm.style.display = 'none';
    }
})

const closeButton = document.getElementById('close');
closeButton.addEventListener("click", function() {
    bookForm.style.display = 'none';
    newBook.style.cursor="pointer";
    newBook.style.pointerEvents="auto";
})

// This shouldn't allow me to submit empty things.

const submitButton = document.getElementById('form-submit');
submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const yes = document.getElementById('yes').checked;
        const no = document.getElementById('yes').checked;
        const ifRead  = (yes == true);

       if (title && author && pages) { // Validate that the fields are not empty
        const newB = new Book(title, author, pages, ifRead);
        addBookToLibrary(newB);
        document.getElementById('form').reset(); // Reset the form after submission
        bookForm.style.display = 'none'; // Optionally hide the form after submission
    } else {
        alert("Please fill in all fields."); // Alert if validation fails
    }
    }
)