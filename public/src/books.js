

function findAuthorById(authors, id) {
  const findAuthor = authors.find( (author) => author.id === id ) 
  return findAuthor;
};

function findBookById(books, id) {
  const findBook = books.find( (book) => book.id === id ) 
  return findBook;
};

function partitionBooksByBorrowedStatus(books) {
  let borrowedStatus = [[], []];
  books.forEach((book) => {
    book.borrows[0].returned === true ? borrowedStatus[1].push(book) : borrowedStatus[0].push(book)
  })
  return borrowedStatus;
};


function getBorrowersForBook(book, accounts) {
  let borrowedBooks = [];
  
  accounts.forEach((account) => {
    book.borrows.forEach((idNum) => {
      if(idNum.id === account.id) {
        const borrowersObject = {...idNum, ...account}
        borrowedBooks.push(borrowersObject);
      }
    })
  })

  return borrowedBooks.slice(0, 10);

};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
