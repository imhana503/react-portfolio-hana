import './about.css';
import { abouts } from './../data';

const About = () => {
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