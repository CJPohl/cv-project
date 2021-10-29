import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>Copyright @ 2021 Christopher J. Pohl</p>
        <a href="https://github.com/CJPohl" target="_blank" rel="noreferrer">
          <i className="fab fa-github" />
        </a>
      </div>
    );
  }
}
