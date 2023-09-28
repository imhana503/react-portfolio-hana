import './project.css';
import { pojects } from './../data';
import React, { useState, useEffect } from 'react';

const sortDate = [
   {value:'latest', name:'최신 순'},
   {value:'oldset', name:'오래된 순'},
];

const sortDevice = [
   {value:'all', name:'전부다'},
   {value:'pc', name:'PC'},
   {value:'mobile', name:'MOBILE'},
   {value:'respons', name:'ResponsiveWeb'},
];

const SelectOption = ({ onChange, option }) =>{
   return (
      <select onChange={(e)=>onChange(e.target.value)}>
         {
            option.map((it, idx)=>{
               return <option key={it.idx} value={it.value}>{it.name}</option>
            })
         }       
      </select>
   )
}

const Project = () => {
   const [sortDates, setSortDates] = useState('latest');
   const [sortDevices, setSortDevices] = useState('all');

   const getProcesse = () => {}

   console.log( new Date('2014.09').getTime() )

   return(
      <section className="section project">
         <h1 className="page-tit">My <span>Project</span></h1>
         <div className="options">
            <SelectOption
               value={sortDates}
               onChange={setSortDates}
               option={sortDate}
            />
            <SelectOption
               value={sortDevices}
               onChange={setSortDevices}
               option={sortDevice}
            />
         </div>
         <div className="">
            {
               pojects.map((it)=>{
                  return<div>{it.title}</div>
               })
            }
         </div>
      </section>
   )
}

export default Project;