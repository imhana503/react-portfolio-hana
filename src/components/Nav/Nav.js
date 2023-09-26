import './nav.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navs } from './../../data';
 
const Nav = () => {
   return(
      <nav className="nav">
         {
            navs.map((it)=>{
               if( it.name === 'Git' ){
                  return <a href="https://github.com/imhana503" target="_blank" title="새창 열림" rel="noopener noreferrer">{it.icon}<i class="blind">{it.name}</i></a>
               } else {
                  return <NavLink to={it.path}>{it.icon}<i class="blind">{it.name}</i></NavLink>
               }                
            })
         }
      </nav>
   );   
}

export default Nav;