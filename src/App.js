import React, { useState } from "react";
import "./styles.css";

//database of books
var bookDatabase = {
  Fiction: [
    {
      name: "Harry Potter Series",
      author: "JK Rowling",
      stars: "4.8/5"
    },
    {
      name: "David Copperfield",
      author: "Charles Dickens",
      stars: "4.5/5"
    },
    {
      name: "Animal Farm",
      author: "George Orwell",
      stars: "4.6/5"
    }
  ],

  NonFiction: [
    {
      name: "Attitude is everything",
      author: "Jeff Keller",
      stars: "4.2/5"
    },
    { name: "Behave", author: "Robert M Sapolsky", stars: "4.8/5" },

    {
      name: "Contagious",
      author: "John Berger",
      stars: "4.5/5"
    }
  ],

  Investing: [
    {
      name: "The Intelligent Investor",
      author: "Benjamin Graham",
      stars: "4.9/5"
    },
    {
      name: "Flirting with Stocks",
      author: "Anil Lamba",
      stars: "4.5/5"
    },
    {
      name: "The Barefoot Investor",
      author: "Scott Pape",
      stars: "4.3/5"
    }
  ]
};

//array of genre's
var booksArray = Object.keys(bookDatabase);

export default function App() {
  //declaring usestate
  var [genre, setgenre] = useState("Fiction");

  //click handler function
  function clickHandler(genre) {
    setgenre(genre);
    // console.log(genre);
  }

  return (
    <div className="App">
      <header>
        <h1>Book wizard</h1>
      </header>

      <hr />

      <div>
        {booksArray.map(function (genre) {
          return <button onClick={() => clickHandler(genre)}>{genre} </button>;
        })}
      </div>
      <hr />

      {bookDatabase[genre].map(function (book) {
        return (
          <div class="output-div">
            <h3 className="divh3">{book.name}</h3>
            {book.author}
            <span>{book.stars}</span>
          </div>
        );
      })}

      {/* {console.log(bookDatabase.Fiction[].map)} */}
    </div>
  );
}
