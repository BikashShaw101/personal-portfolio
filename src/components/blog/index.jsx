import React from 'react';

import './style.scss';

import Section from '../shared/section';
import Blogcards from './blogcards';

import blog1 from '../../images/blogs/Blog.png';

const Blog = () => {
  return (
   <Section
    id="blog"
    title="Blogs & Articles"
    background="dark"
   >
      <div className="blog-content-wrapper2">
        <Blogcards 
            user="Nikhil Shaw"
            date="July 12 2023"
            image= {blog1}
            title="Fundamental of love (The Quote)"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
        />
        <Blogcards 
            user="Nikhil Shaw"
            date="July 12 2023"
            image= {blog1}
            title="Fundamental of love (The Quote) "
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fundamental of love Fundamental of love"
        />
        <Blogcards 
            user="Nikhil Shaw"
            date="July 12 2023"
            image= {blog1}
            title="Fundamental of love (The Quote) "
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fundamental of love Fundamental of love"
        />
      </div>
   </Section>
  )
}

export default Blog
