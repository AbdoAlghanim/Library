class Book {
    constructor(title, author, pages, isRead)
    {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead 
    }
    info = function()
    {
        return (
            title + " by " + author + ", " + pages + " pages, " + isRead
            )
    }
}
class Library {

    constructor(){
        this.myLibrary = []
    }

    addNewBook(newBook) {
        if (!this.inLibrary) {
            this.myLibrary.push(newBook)
        }
    }

    inLibrary(newBook){
        return this.myLibrary.some((book) => book.title === newBook.title)
    }
    removeBook(title){
        this.myLibrary = this.myLibrary.filter((book) => book.title !== title)
    }
}
// library initialization
const library = new Library()

// self explanatory
const submitButton = document.getElementsByClassName("submitButton")[0]
const formDiv = document.getElementById('formDiv')
const addBookButton = document.getElementsByClassName("addBookButton")[0]

// function to show the form on button press
addBookButton.addEventListener("click", () => formDiv.classList.add('active'));

// instantiates a new book object and pushes it to the library array
const createNewBook = () => {
    let bookTitle = document.getElementById('title').value,
    bookAuthor = document.getElementById('author').value,
    bookPages = document.getElementById('pages').value,
    bookIsRead = document.getElementById('isReadCheckBox').value

    let bookTitleObject = new Book(bookTitle, bookAuthor, bookPages, bookIsRead)

    library.addNewBook(bookTitleObject)
}

const addToUI = () => {
    library.myLibrary.forEach
}
