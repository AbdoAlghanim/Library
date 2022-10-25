class Book {
    constructor(title, author, pages, isRead)
    {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead 
    }
    
}
class Library {

    constructor(){
        this.myLibrary = []
    }

    addNewBook(newBook) {
        if (!this.inLibrary(newBook)) {
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

// function to remove the form modal after the submit button is clicked and stop refresh
// also adds the element to the library and displays it in the UI
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    createNewBook()
    addToUI()
    formDiv.classList.remove('active')
    })

// instantiates a new book object and pushes it to the library array
const createNewBook = () => {
    let bookTitle = document.getElementById('title').value,
    bookAuthor = document.getElementById('author').value,
    bookPages = document.getElementById('pages').value,
    bookIsRead = document.getElementById('isReadCheckBox').value

    let bookObject = new Book(bookTitle, bookAuthor, bookPages, bookIsRead)

    library.addNewBook(bookObject)
    console.log(library.myLibrary)
}

// creates UI elements and appends them to the container, also fills their inner text
// and adds remove button which I couldn't place out of the function due to scope problems
// as I was unable to find the title of the book which has the remove button without selecting all books

// I think the solution is to use a for loop instead of a for each
// and store the i variable (the index temporary variable) and then
// use it as a sort of ID var
const addToUI = () => {
    library.myLibrary.forEach((book) => {
        let card = document.createElement('div'),
        bookTitle = document.createElement('p'),
        bookAuthor = document.createElement('p'),
        readButton = document.createElement('button'),
        removeButton = document.createElement('button'),
        cardContainer = document.getElementsByClassName('cardContainer')[0]

        card.classList.add('card')
        bookTitle.classList.add('cardTitle')
        bookAuthor.classList.add('cardTitle')
        readButton.classList.add('cardBtn')
        removeButton.classList.add('cardBtn', 'removeBtn')

        card.appendChild(bookTitle)
        card.appendChild(bookAuthor)
        card.appendChild(readButton)
        card.appendChild(removeButton)
        
        cardContainer.appendChild(card)

        bookTitle.textContent += book.title
        bookAuthor.textContent += book.author
        readButton.textContent += "Read"
        removeButton.textContent += "Remove"

        // checks if the book is read, if it is then it'll be green
        if (document.getElementById('isReadCheckBox').checked) {
            readButton.classList.add('isReadBtn')
        }
        else {
            readButton.classList.add('removeBtn')
        }
        removeButton.addEventListener('click' , () => {
            title = removeButton.previousElementSibling.previousElementSibling.textContent
            library.removeBook(title)
            removeButton.parentNode.classList.add('inactive')
            console.log(library.myLibrary)
        })
    })
}

// used to get an array of the buttons on the cards
const readButtons = document.getElementsByClassName("cardBtn")
console.log(readButtons)

const toggleRead = () => {
    readButtons.forEach((button) => {
        if (button.textContent = "Read"){
            console.log(button.textContent)
            button.addEventListener('click', () => {
                if (button.classList.contains('isReadBtn')){
                    button.classList.remove('isReadBtn')
                }
                else {
                    button.classList.add('isReadBtn')
                }
        })
        }
    })
}
toggleRead()