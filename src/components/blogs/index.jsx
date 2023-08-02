import React from "react";

import "./style.scss";

import Section from "../shared/section";

import blog1 from "../../images/blogs/Blog.png";
import blog2 from "../../images/blogs/Blog2.png";

import BlogCard from "./blog-card";

const Blogs = () => {
  return (
    <Section id="blogs" title="Blogs & Articles" background="dark">
      <div className="blogs-content-wrapper">
        <BlogCard 
            user="Nikhil Shaw"
            date="July 12 2023"
            image= {blog1}
            title="Fundamental of love (The Quote)"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
        />
        <BlogCard 
            user="Nikhil Shaw"
            date="July 12 2023"
            image= {blog2}
            title="Fundamental of love - A supremecy"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
        />
        <BlogCard 
            user="Nikhil Shaw"
            date="July 12 2023"
            image= {blog1}
            title="Fundamental of love"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
        />
      </div>
    </Section>
  );
};

export default Blogs;
