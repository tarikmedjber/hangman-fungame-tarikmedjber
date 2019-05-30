import React from "react";
import Gallows from "./components/Gallows";
// import Header from "./components/Header";
import words from "./data/words";

import "./index.css";
class App extends React.Component {
  state = {
    toro: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    words: words,
    currentIndex: 0,
    lives: 9,
    guessedLetters: [],
    gameStatus: "",
    final: "",
    header: "HangCat!"
  };

  render() {
    return (
      <div class="app">
        <h1>{this.state.header}</h1>
        <button id="newCatButton" onClick={this.createNewGame}>
          New Cat!
        </button>
        <p id="lives">{this.state.lives + "   lives left"}</p>
        <p id="final">{this.state.final}</p>

        <Gallows
          createNewGame={this.createNewGame}
          alpha={this.state.toro}
          gameStatus={this.state.gameStatus}
          checkGameStatus={this.checkGameStatus}
          guessedLetters={this.state.guessedLetters}
          checkLetter={this.checkLetter}
          lives={this.state.lives}
          word={this.state.words[this.state.currentIndex]}
          currentIndex={this.state.currentIndex}
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
        gameStatus: "",
        toro: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        final: "",
        header: "HangCat!"
      };
    });
  };

  checkLetter = (letter, word) => {
    if (!word.includes(letter)) {
      this.setState(prevState => {
        return {
          lives: prevState.lives - 1,
          toro: prevState.toro.replace(letter, "")
        };
      });
    } else {
      this.setState(prevState => {
        return {
          guessedLetters: [...prevState.guessedLetters, letter],
          toro: prevState.toro.replace(letter, "")
        };
      });
    }
  };

  checkGameStatus = word => {
    if (this.state.lives < 1) {
      this.setState({
        gameStatus: "Loss",
        header: "YOU KILLED THE CAT GOD DAMN IT!",
        final: (
          <img
            src="https://i.makeagif.com/media/7-22-2017/7IA5OU.gif"
            alt="lost!"
            height="250"
            width="400"
          />
        )
      });
    } else if (
      this.state.words[this.state.currentIndex].split("").every(letter => {
        return this.state.guessedLetters.includes(letter);
      })
    ) {
      this.setState({
        gameStatus: "Win",
        header: "THE CAT SURVIVED YOU WIN!",

        final: (
          <img
            src="https://i.pinimg.com/originals/85/98/2e/85982e3e0db30ac93c3818f66299738b.gif"
            alt="win!"
            height="250"
            width="400"
          />
        )
      });
    }
  };
}

export default App;
