import React from 'react';
import './article.css';

const Article = ({imgUrl, date, title}) => {
  return (
    <div className="gpt3__blog-container_article">

      {/* Article container (Image, title and date as props) */}
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="Blog" />
      </div>
      {/* Article container end */}

      {/* Date, title */}
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
      {/* Date, title end */}
    </div>
  )
}

export default Article
