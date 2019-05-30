import React from "react";

import catHangPic0 from "../hang-cat-pics/0lives.jpg";
import catHangPic1 from "../hang-cat-pics/1lives.jpg";
import catHangPic2 from "../hang-cat-pics/2lives.jpg";
import catHangPic3 from "../hang-cat-pics/3lives.jpg";
import catHangPic4 from "../hang-cat-pics/4lives.jpg";
import catHangPic5 from "../hang-cat-pics/5lives.jpg";
import catHangPic6 from "../hang-cat-pics/6lives.jpg";
import catHangPic7 from "../hang-cat-pics/7lives.jpg";
import catHangPic8 from "../hang-cat-pics/8lives.jpg";

const catHangPicArray = [
  catHangPic0,
  catHangPic1,
  catHangPic2,
  catHangPic3,
  catHangPic4,
  catHangPic5,
  catHangPic6,
  catHangPic7,
  catHangPic8
];
class Gallows extends React.Component {
  componentDidUpdate = word => {
    if (!this.props.gameStatus) this.props.checkGameStatus(word);
  };
  render() {
    return (
      <div id="game">
        <div id="gallows">
          <div id="hangingQuarters">
            <img
              id={"nineLIives"}
              src={catHangPicArray[this.props.lives]}
              alt="hangcat"
              height="480"
              width="800"
            />
          </div>
          {
            <ul id="correctLetters">
              {this.props.word.split("").map((letter, i) => {
                return this.props.guessedLetters.includes(letter) ? (
                  <li key={i}>{letter}</li>
                ) : (
                  <li key={i}>__</li>
                );
              })}
            </ul>
          }
        </div>
        <div id="keyboard">
          <ul id="alphabet">
            {this.props.alpha.split("").map((letter, i) => {
              return (
                <li
                  key={i}
                  onClick={event => {
                    this.props.checkLetter(letter, this.props.word);
                  }}
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
