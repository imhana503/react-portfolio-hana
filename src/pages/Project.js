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
   // {value:'wai', name:'웹접근성'},
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

   //HEAD TITLE
   useEffect(()=>{
      setData( pojects );  
      
      const title = document.getElementsByTagName('title')[0];
      title.textContent = 'PROJECT | 임하나의 포트폴리오';
   },[data]);

   //필터링
   const getData = () =>{
      const deviceCheck = (it) => {
         if( sortDevices === 'pc' ){
           return it.device === 'PC';
         }

         if( sortDevices === 'mobile' ){
            return it.device === 'Mobile';
         }

         if( sortDevices === 'respons' ){
            return it.device === 'ResponsiveWeb';
         }
        
      }

      const compare = (a, b) => {
         if( sortDates === 'latest' ){
            return new Date(b.date).getTime() - new Date(a.date).getTime();    
         } else {
           return new Date(a.date).getTime() - new Date(b.date).getTime();         
         }    
      }
  
      const copyData = JSON.parse(JSON.stringify(data));
      const dataDevicec =  sortDevices === 'all' ? copyData : copyData.filter((it)=> deviceCheck(it))
      const dataSort = dataDevicec.sort(compare);

      return dataSort;
   }

   useEffect(()=>{
      getData();
   },[])


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
               getData().map((it, idx)=>{
                  return( 
                     <div className="card" key={idx}>
                        <div className="img"><img src={it.thumb} alt={`${it.title} 이미지`}/></div>
                        <div className="card-list">
                           <p className="tit">{it.title}</p>
                           <p className="txt">device: {it.device} date: {it.date}</p>
                        </div>
                        <a href={it.link} titlt="새창 열림" target='_blank' className="btn" rel="noopener noreferrer">사이트 바로가기</a>
                     </div>
                  )
               })
            }
         </div>
      </section>
   )
}

export default Project;