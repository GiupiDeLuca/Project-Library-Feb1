


function totalBooksCount(books) {
  return books.length;
};

function totalAccountsCount(accounts) {
  return accounts.length;
};

function booksBorrowedCount(books) {
  let borrowedBooks = 0;
  books.filter( (book) => book.borrows[0].returned === false ? borrowedBooks += 1 : borrowedBooks )
  return borrowedBooks;
}


// HELPER FUNCTION //
function sortAndSlice(array) {
  return array.sort((countA, countB) => countB.count - countA.count).slice(0, 5);
} 
//////////////////////  


function getMostCommonGenres(books) {
  let genres = books.reduce((acc, book) => {
    acc.hasOwnProperty(book.genre)
      ? acc[book.genre]++
      : acc[book.genre] = 1
      return acc
  }, {})
  const genreArray = Object.keys(genres).map(genre => {
    return {
      name: genre,
      count: genres[genre]
    }
  })

  return sortAndSlice(genreArray);
  
};




function getMostPopularBooks(books) {
  let populars = {}
  books.forEach( (book) =>  populars[book.title] = book.borrows.length )

  const titleArray = Object.keys(populars).map(title => ({ name : title, count: populars[title] }))

  return sortAndSlice(titleArray);
};



function getMostPopularAuthors(books, authors) {
  let names = {}
  books.forEach((book) => {
    authors.forEach((author) => {
      if (book.authorId === author.id) {
      names[`${author.name.first} ${author.name.last}`] = book.borrows.length;
      }
    })
  })

  const authorArray = Object.keys(names).map(writer => ({ name : writer, count: names[writer] }))

  return sortAndSlice(authorArray);
};




module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
