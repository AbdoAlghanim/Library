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
        myLibrary = []
    }
    
}