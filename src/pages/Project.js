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
               return <option key={idx} value={it.value}>{it.name}</option>
            })
         }       
      </select>
   )
}

const Project = () => {
   const [sortDates, setSortDates] = useState('latest');
   const [sortDevices, setSortDevices] = useState('all');

   const [data, setData] = useState([]);

   useEffect(()=>{
      setData( pojects );     
   },[data]);

   const getData = () =>{
      const deviceCheck = (it) => {
   
         if( it.device === 'PC' ){
            return it;
         } 

         if( it.device === 'MOBILE' ){
            return it;
         }

         if( it.device === 'ResponsiveWeb' ){
            return it;
         }
      }

      const compare = (a, b) => {
         console.log('srot')
         if( sortDates === 'latest' ){
            return new Date(b.date).getTime() - new Date(a.date).getTime();    
         } else {
           return new Date(a.date).getTime() - new Date(b.date).getTime();         
         }
      }
  
      const copyData = JSON.parse(JSON.stringify(data));
      const dataDevicec =  sortDevices === 'all' ? copyData : copyData.filter((it)=> deviceCheck(it))
      const dataSort = copyData.sort(compare);

      return copyData;
   }

   getData();


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
         <div className="card-wrap">
            {
               getData().map((it)=>{
                  return(
                     <div className="card">
                        <div className="img"><img src="" alt='이미지'/></div>
                        <div>
                           <p>{it.title}</p>
                           <p>{it.device}</p>
                           <p>{it.date}</p>
                           <a href="#" titlt="새창 열림" target='_blank' className="btn" rel="noopener noreferrer">바로가기</a>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </section>
   )
}

export default Project;