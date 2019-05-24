import React from "react";

class Gallows extends React.Component {
  state = {
    // letterLookUp: [
    //   { letter: "D", guessed: false },
    //   { letter: "O", guessed: false },
    //   { letter: "N", guessed: false },
    //   { letter: "G", guessed: false },
    //   { letter: "L", guessed: false },
    //   { letter: "E", guessed: false }
    // ]
  };
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  render() {
    const letters = this.props.word.split("");
    console.log(letters);
    console.log(this.props.guessedLetters);

    // // const letterObjs = letters.map(letter => {
    // //   return { letter: letter, guessed: false };
    // // });
    // this.setState({ letterLookUp: letterObjs });

    return (
      <div id="game">
        <div id="keyboard">
          <ul id="alphabet">
            {this.alphabet.map((letter, i) => {
              return (
                <li
                  key={i}
                  onClick={event => this.props.checkLetter(letter, letters)}
                >
                  {letter}
                </li>
              );
            })}
          </ul>
        </div>
        <div id="gallows">
          {
            <ul id="correctLetters">
              {letters.map((letter, i) => {
                return this.props.guessedLetters.includes(letter) ? (
                  <li key={i}>{letter}</li>
                ) : (
                  <li key={i}>__</li>
                );
              })}
            </ul>
          }
        </div>
      </div>
    );
  }
}
export default Gallows;
