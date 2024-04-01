import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img
            src="https://www.cbc.ca/newsinteractives/content/images/parade_finals_-0569_1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{title}</p>
            <a href="/" className="btn btn-primary">
              {description}
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
