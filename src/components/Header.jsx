import React from "react";

class Header extends React.Component {
  render() {
    console.log(this.props.header);
    return (
      <div>
        <h1>{this.props.header}</h1>
        {/* <h3>{props.lives} Lives</h3> */}
      </div>
    );
  }
}

export default Header;
