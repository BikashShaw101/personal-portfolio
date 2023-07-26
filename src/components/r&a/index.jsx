import React, { useState } from 'react';

import './style.scss';

import Section from '../shared/section';
import Filter from './Filters';
import Showcase from './showcase';

const Files = [
  {
    id:1,
    name:"History and Culture",
    tags:["education","social"],
    media:{
      thumbnail: require("../../images/portfolio/History.jpg")
    }
  },
  {
    id:2,
    name:"Technology and Skills",
    tags:["education"],
    media:{
      thumbnail: require("../../images/portfolio/globe1.png")
    }
  },
  {
    id:3,
    name:"Educational and devlopmnet",
    tags:["education","social"],
    media:{
      thumbnail: require("../../images/portfolio/education.jpg")
    }
  },
  {
    id:4,
    name:"Religion and Faith",
    tags:["religion","social"],
    media:{
      thumbnail: require("../../images/portfolio/sexuality2.jpg")
    }
  },
  {
    id:5,
    name:"Educational and Devolopment",
    tags:["education","social"],
    media:{
      thumbnail: require("../../images/portfolio/education1.jpg")
    }
  },
  {
    id:6,
    name:"Scipture and Vedanta",
    tags:["social","religion"],
    media:{
      thumbnail: require("../../images/portfolio/bhagwat-geeta.jpg")
    }
  },
  {
    id:7,
    name:"Ethics and Morality",
    tags:["social","education"],
    media:{
      thumbnail: require("../../images/portfolio/ethic.jpg")
    }
  },
  {
    id:8,
    name:"Sexuality and Feminism",
    tags:["religion","sexuality"],
    media:{
      thumbnail: require("../../images/portfolio/vedas.jpg")
    }
  },
  
]

const Research = () => {

  const [research,setResearch] = useState(Files);
  const [transition,setTransition] = useState(false);

  const filterProject = (tag) =>{

    setTransition('zoomout');

    setTimeout(()=>{
        if(tag !== 'all'){
          const filteredProject = Files.filter((f)=>f.tags.includes(tag));
          setResearch(filteredProject)
        }else{
          setResearch(Files)
        }
        setTransition('zoomin');
    },300);

    setTimeout(()=>{
      setTransition(false);
    },600)
  }

  return (
    <Section
        id="r&d"
        title="Research & Analysis"
        background='light'
    >
        <div className="research-content-wrapper">
            <Filter filterProject={ (tag)=>filterProject(tag) }/>
            <Showcase data={research} transition={transition}/>
        </div>
    </Section>
  )
}

export default Research;
