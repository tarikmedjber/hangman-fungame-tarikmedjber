import React from 'react';

class Gallows extends React.Component {
  state = {};
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  word = this.props.word;

  componentDidUpdate = word => {
    if (!this.props.gameStatus) this.props.checkGameStatus(word);
  };
  render() {
    const letters = this.props.word.split('');

    // const letterObjs = letters.map(letter => {
    //   return { letter: letter, guessed: false };
    // });
    // this.setState({ letterLookUp: letterObjs });

    return (
      <div id='game'>
        <div id='gallows'>
          <div id='hangingQuarters'>
            <img />
          </div>
          {
            <ul id='correctLetters'>
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
        <div id='keyboard'>
          <ul id='alphabet'>
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
      </div>
    );
  }
}
export default Gallows;
