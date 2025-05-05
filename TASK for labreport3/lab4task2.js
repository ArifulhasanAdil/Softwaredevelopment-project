
let books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

  M001: { name: "Adil", email: "adil@example.com" },
  M002: { name: "Osman", email: "osman@example.com" }
};

// Function to add a book
function addBook(id, title, author) {
  books.push({ id, title, author });
  console.log(`Book '${title}' added.`);
}

// To search for a book by title
function searchBook(title) {
  return books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

// To display all books
function displayBooks() {
  console.log("\nBook Collection:");
  books.forEach(book => {
    console.log(`ID: ${book.id}, Title: '${book.title}', Author: ${book.author}`);
  });
}

displayBooks();

addBook(4, "Avenger", "Adil Khan");
displayBooks();

const results = searchBook("1984");
console.log("\nSearch Results:");
results.forEach(book => {
  console.log(`ID: ${book.id}, Title: '${book.title}', Author: ${book.author}`);
});
