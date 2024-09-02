import React from 'react'

// This is long
// import Article from '../../components/article/Article';

// So instead we can use
import {Article} from '../../components';

import {blog01, blog02, blog03, blog04, blog05} from './import';

import './blog.css';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">

        {/* Blog Heading */}
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
        {/* Blog Heading end */}

      </div>
      <div className="gpt3__blog-container">

        {/* Left side article */}
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="May 26 2024" title="GPT-3 and open" />
        </div>
        {/* Left side article end */}

        {/* Right side articles (Here we are sending
        images, dates and title to ARticle.jsx using props) */}
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="May 26 2024" title="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog03} date="May 26 2024" title="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog04} date="May 26 2024" title="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog05} date="May 26 2024" title="GPT-3 and Open AI is the future. Let us explore how it is?" />
        </div>
        {/* Right side articles end */}

      </div>
    </div>
  )
}

export default Blog
