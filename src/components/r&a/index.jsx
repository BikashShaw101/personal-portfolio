import React from 'react';

import './style.scss';

import Section from '../shared/section';
import Filter from './Filters';

const Files = [
  {
    id:1,
    name:"Educational and Skills",
    tags:["education","indian-education"],
    media:{
      thumbnail: require("../../images/portfolio/thumb-1.jpg")
    }
  },
  {
    id:2,
    name:"History and culture",
    tags:["history","indian-history",'culture'],
    media:{
      thumbnail: require("../../images/portfolio/thumb-2.jpg")
    }
  },
  {
    id:3,
    name:"Educational and devlopmnet",
    tags:["educational","indian-progressment"],
    media:{
      thumbnail: require("../../images/portfolio/thumb-3.jpg")
    }
  },
  {
    id:4,
    name:"religion and faith",
    tags:["religion","indian-religion"],
    media:{
      thumbnail: require("../../images/portfolio/thumb-4.jpg")
    }
  },
  {
    id:5,
    name:"technology and Skills",
    tags:["tech","Techology and devolopment"],
    media:{
      thumbnail: require("../../images/portfolio/thumb-5.jpg")
    }
  },
  {
    id:6,
    name:"Ethics and Morality",
    tags:["ethics","truth and fact"],
    media:{
      thumbnail: require("../../images/portfolio/thumb-6.jpg")
    }
  },
  {
    id:7,
    name:"econmoy and growth",
    tags:["indian-economy","world-economy"],
    media:{
      thumbnail: require("../../images/portfolio/thumb-7.jpg")
    }
  },
  
]

const Research = () => {
  return (
    <Section
        id="r&d"
        title="Research & Analysis"
        background='light'
    >
        <div className="research-content-wrapper">
            <Filter />
        </div>
    </Section>
  )
}

export default Research;
