import React, { useState } from "react";
import "./styles.css";

//database of books
var bookDatabase = {
  Fiction: [
    {
      name: "A Gentleman in Moscow",
      author: "Amor Towles",
      description:
        "On 21 June 1922, Count Alexander recipient of the Order of Saint Andrew, member of the Jockey Club, Master of the Hunt is escorted out of the Kremlin, across Red Square and through the elegant revolving doors of the Hotel Metropol.Deemed an unrepentant aristocrat by a Bolshevik tribunal, the Count has been sentenced to house arrest indefinitely.",
      stars: "4.7/5"
    },
    {
      name: "David Copperfield",
      author: "Charles Dickens",
      description:
        "David Copperfield was first published as a serial from May 1849 to November 1850. Considered Charles Dickens’ “veiled autobiography”, it was published in a single volume by Bradbury and Evans on 14 November 1850.So artfully does the novelist merge with his writerprotagonist that it is difficult to discern where Dickens ends and Copperfield begins.",
      stars: "4.5/5"
    },
    {
      name: "Animal Farm",
      author: "George Orwell",
      description:
        "What happens when ill-treated farm animals gang up to throw out their lazy, corrupt and power-drunk rulers? Animal Farm is born. As humans get ousted from Manor Farm and animals take control, their utopian fantasy of running a farm on the basis of equality soon begins to crumble before their eyes. ",
      stars: "4.6/5"
    }
  ],

  NonFiction: [
    {
      name: "Attitude is everything",
      author: "Jeff Keller",
      description:
        " Jeff Keller, motivational speaker and coach, will show you how to take control and unleash your hidden potential through three powerful steps:--THINK! Success begins in the mind. The power of attitude can change your destiny.--SPEAK! Watch your words. How you speak can propel you towards your goals.--ACT! Don't sit back.",
      stars: "4.2/5"
    },
    {
      name: "Behave",
      author: "Robert M Sapolsky",
      description:
        "We are capable of savage acts of violence but also spectacular feats of kindness: is one side of our nature destined to win out over the other?Every act of human behaviour has multiple layers of causation, spiralling back seconds, minutes, hours, days, months, years, even centuries, right back to the origins of our species.",
      stars: "4.8/5"
    },

    {
      name: "Contagious",
      author: "John Berger",
      description:
        "In Contagious, Berger reveals the secret science behind word-of-mouth and social transmission. Discover how six basic principles drive all sorts of things to become contagious, from consumer products and policy initiatives to workplace rumors and YouTube videos.",
      stars: "4.5/5"
    }
  ],

  Investing: [
    {
      name: "The Intelligent Investor",
      author: "Benjamin Graham",
      description:
        "It is a widely acclaimed book by Benjamin Graham on value investing. Written by one of the greatest investment advisers of twentieth century, the book aims at preventing potential investors from substantial errors and also teaches them strategies to achieve long-term investment goals.",
      stars: "4.9/5"
    },
    {
      name: "Flirting with Stocks",
      author: "Anil Lamba",
      description:
        "FLIRTING WITH STOCKS introduces the uninitiated to the world of share markets. Acclaimed financial expert Dr Anil Lamba begins with the basics of how the investment cycle works, and builds up to the nitty-gritties of bulls and bears, mutual funds, kerb trading, badla finance and share-price fixing. ",
      stars: "4.5/5"
    },
    {
      name: "The Barefoot Investor",
      author: "Scott Pape",
      description:
        "This book will show you how to create an entire financial plan that is so simple you can sketch it on the back of a serviette and you'll be able to manage your money in 10 minutes a week.",
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
            <hr />
            <h4 style={{ margin: 0 }}>{book.author}</h4>
            <br />
            {book.description}
            <span>{book.stars}</span>
          </div>
        );
      })}

      {/* {console.log(bookDatabase.Fiction[].map)} */}
    </div>
  );
}
