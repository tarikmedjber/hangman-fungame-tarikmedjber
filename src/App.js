import React from "react";
import Gallows from "./components/Gallows";
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
    header: "HangCat!",
    showWord: "false"
  };
  componentDidUpdate = word => {
    if (!this.state.gameStatus) this.checkGameStatus(word);
  };
  render() {
    return (
      <div className="app">
        <h1>{this.state.header}</h1>
        <button className="newCatButton" onClick={this.createNewGame}>
          New Cat!
        </button>

        <p id="lives">{this.state.lives + "   lives left"}</p>
        <p id="final">{this.state.final}</p>

        <Gallows
          showWordFunc={this.showWordFunc}
          showWord={this.state.showWord}
          final={this.state.final}
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

  showWordFunc = event => {
    this.setState({ showWord: true });
  };
  createNewGame = event => {
    this.setState(prevState => {
      return {
        currentIndex: Math.round(Math.random() * (prevState.words.length - 1)),
        lives: 9,
        guessedLetters: [],
        gameStatus: "",
        toro: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        final: "",
        header: "HangCat!",
        showWord: "false"
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
        header: "YOU KILLED TOM!",
        final:
          "  https://thumbs.gfycat.com/VagueFlawlessAntlion-size_restricted.gif"
      });
    } else if (
      this.state.words[this.state.currentIndex].split("").every(letter => {
        return this.state.guessedLetters.includes(letter);
      })
    ) {
      this.setState({
        gameStatus: "Win",
        header: "TOM SURVIVED YOU WIN!",

        final:
          "https://i.pinimg.com/originals/85/98/2e/85982e3e0db30ac93c3818f66299738b.gif"
      });
    }
  };
}

export default App;
