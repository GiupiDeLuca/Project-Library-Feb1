

function findAccountById(accounts, id) {
  const accountId = accounts.find((account) => account.id === id)
  return accountId;
};


function sortAccountsByLastName(accounts) {
  accounts.sort((lastNameA, lastNameB) => (lastNameA.name.last > lastNameB.name.last) ? 1 : ((lastNameB.name.last > lastNameA.name.last ? -1 : 0)))
  return accounts;
};


function numberOfBorrows(account, books) {
  let numBorrows = 0;
  books.forEach((book) => {
    numBorrows += book.borrows.filter((idNum) => idNum.id === account.id).length
    
  })

  return numBorrows

};



function getBooksPossessedByAccount(account, books, authors) {
  let booksByAccount = [] ;

  books.forEach((book) => {
    authors.forEach((author) => {
      if(author.id === book.authorId) {
        book.borrows.forEach((idNum) => {
          if ((idNum.id === account.id) && (idNum.returned === false)) {
            const possessedBooks = {...book, author : author, borrows : [idNum]};
            booksByAccount.push(possessedBooks);
          }  
        })
      }
    })
  })

  return booksByAccount; 
};





module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
