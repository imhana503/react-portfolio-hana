import './about.css';
import { useEffect } from 'react';
import { abouts } from './../data';

const About = () => {
   useEffect(()=>{
      const title = document.getElementsByTagName('title')[0];
      title.textContent = 'ABOUT | 임하나의 포트폴리오';
   },[]);

   return(
      <section className="section about">
         <h1 className="page-tit"><span>ABOUT </span>ME</h1>
         <h2 className="sec-tit">MY SKILLS</h2>
         <div className="card-wrap">
            {
               abouts.map((it, idx)=>{
                  return(
                     <div key={it.idx} className="card">
                        <h3 className="tit">{it.icon}<span>{it.title}</span></h3>
                        <ul className="list">
                           {it.text.map((item)=>{
                              return<li>{item}</li>
                           })}
                        </ul>  
                     </div>
                  )
               })
            }
         </div>
      </section>
   )
}

export default About;