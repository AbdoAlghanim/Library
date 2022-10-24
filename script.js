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

const library = new Library()

const submitButton = document.getElementsByClassName("submitButton")
const formDiv = document.getElementById('formDiv')
const addBookButton = document.getElementsByClassName("addBookButton")[0]


addBookButton.addEventListener("click", () => formDiv.classList.add('active'));
