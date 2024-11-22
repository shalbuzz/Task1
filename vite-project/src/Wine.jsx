import React, { Component } from "react";
import "./Wine.css"; 

class Wine extends Component {
  render() {
    const { title, description, rating } = this.props;
    return (
      <div className="wine-card">
        <h2 className="wine-title">{title}</h2>
        <p className="wine-description">{description}</p>
        <p className="wine-rating">Rating: {rating}/5</p>
      </div>
    );
  }
}

export default Wine;
