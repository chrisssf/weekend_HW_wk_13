class Library {
  constructor(books = []){
    this.books = books;
  }
  bookCount(){
    return this.books.length;
  }

  addBook(newBook){
      this.books.push(newBook);
  }

  addBooks(newBooks){
    newBooks.forEach(book => this.books.push(book));
  }

  printInventory(){
    let x;
    this.books.forEach((book) => {
      const {title, author, genre} = book;
      console.log(`${title} by ${author}`)
      x = `${title} by ${author}`

      // console.log(`${book.title} by ${book.author}`)
      x = `${book.title} by ${book.author}`
    })
    return x
  }
}

// const book = new Book('J R R Tolkien', 'The Hobbit', 'Fantasy');
// library.addBook(book);
//
// library = new Library;
//
// library.printInventory()


// const Library = function (books = []) {
//   this.books = books;
// };
//
// Library.prototype.bookCount = function () {
//   return this.books.length;
// };
//
// Library.prototype.addBook = function (newBook) {
//   this.books.push(newBook);
// };
//
// Library.prototype.addBooks = function (newBooks) {
//   newBooks.forEach(book => this.books.push(book));
// };
//
// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//   });
// };

// module.exports = Library;
export default Library;
