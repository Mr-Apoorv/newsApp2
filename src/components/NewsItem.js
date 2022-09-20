import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc } = this.props;

    return (
      <div>
        <div className="card my-3" style={{ width: "18rem", height: "25rem" }}>
          <img
            src={
              this.props.imageUrl
                ? this.props.imageUrl
                : "https://images.moneycontrol.com/static-mcnews/2022/06/Stocks-770x433.jpg"
            }
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "12rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {this.props.title ? this.props.title.slice(0, 45) : ""}...
            </h5>
            <p className="card-text">{desc ? desc.slice(0, 88) : ""}...</p>
            <a
              href={this.props.articleUrl}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
