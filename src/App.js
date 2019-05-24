import React from "react";
import Gallows from "./components/Gallows";
import Header from "./components/Header";
import words from "./data/words";

import "./index.css";
class App extends React.Component {
  state = { words: words, currentIndex: 0, lives: 9, guessedLetters: [] };
  render() {
    return (
      <div>
        <Header lives={this.state.lives} />
        <button onClick={this.createNewGame}>New Cat!</button>
        <Gallows
          guessedLetters={this.state.guessedLetters}
          checkLetter={this.checkLetter}
          lives={this.state.lives}
          word="DONGLE"
          // word={this.state.words[this.state.currentIndex]}
        />
      </div>
    );
  }
  createNewGame = event => {
    this.setState(prevState => {
      return {
        currentIndex: Math.round(Math.random() * (prevState.words.length - 1)),
        lives: 9
      };
    });
  };
  checkLetter = (letter, word) => {
    if (!word.includes(letter)) {
      this.setState(prevState => {
        return {
          lives: prevState.lives - 1
        };
      });
    } else {
      this.setState(prevState => {
        return { guessedLetters: [...this.state.guessedLetters, letter] };
      });
    }
  };
}

export default App;
