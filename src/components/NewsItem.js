import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{desc}.</p>
            <a
              href={`/newsDetails/${this.props.articleUrl}`}
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
