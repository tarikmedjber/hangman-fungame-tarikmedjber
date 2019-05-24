import React from "react";

const Header = props => {
  return (
    <div>
      <h1>HangCat</h1>
      <h3>{props.lives} Lives</h3>
    </div>
  );
};

export default Header;
