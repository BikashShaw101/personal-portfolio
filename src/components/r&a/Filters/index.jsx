import { useState } from 'react';
import React from 'react';

import './style.scss';

const FilterName = [
    {
        name:"All",
        id:'all',
    },

    {
        name:"Education",
        id:'education',
    },

    {
        name:"Social",
        id:'social',
    },

    {
        name:"Religion",
        id:'religion',
    },

    {
        name:"Sexuality",
        id:'sexuality',
    },
]

const Filter = () => {

    const [active,setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id);
    }

  return (
    <ul className="filter-menu-items">
       { FilterName.map((value,index)=>{
            return (
                <li 
                    key={value.id} 
                    className={`filter-menu-item ${
                        active === value.id ? "active" : "" 
                    }`} 
                    onClick={()=>clickHandler(value.id)}>

                    {value.name}

                </li>
            )
       })}
    </ul>
  )
}

export default Filter;
