import React from "react";
import Gallows from "./components/Gallows";
import Header from "./components/Header";
import words from "./data/words";

import "./index.css";
class App extends React.Component {
  state = {
    words: words,
    currentIndex: 0,
    lives: 9,
    guessedLetters: [],
    gameStatus: ""
  };

  render() {
    return (
      <div>
        <Header lives={this.state.lives} invoke={this.checkGameStatus} />
        <button onClick={this.createNewGame}>New Cat!</button>
        <Gallows
          gameStatus={this.state.gameStatus}
          checkGameStatus={this.checkGameStatus}
          guessedLetters={this.state.guessedLetters}
          checkLetter={this.checkLetter}
          lives={this.state.lives}
          word={this.state.words[this.state.currentIndex]}
        />
      </div>
    );
  }
  createNewGame = event => {
    this.setState(prevState => {
      return {
        currentIndex: Math.round(Math.random() * (prevState.words.length - 1)),
        lives: 9,
        guessedLetters: [],
        gameStatus: ""
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

  checkGameStatus = word => {
    if (this.state.lives < 1) {
      this.setState({ gameStatus: "Loss" });
    } else if (
      this.state.words[this.state.currentIndex].split("").every(letter => {
        return this.state.guessedLetters.includes(letter);
      })
    )
      this.setState({ gameStatus: "Win" });
  };
}

export default App;
