import './home.css';
import Typed from "typed.js";
import { useEffect } from 'react';

const Home = () => {
   useEffect(() => {
      const typed = new Typed('#typing', {
        strings: ["HI !!", "방문해 주셔서 감사합니다.", "웹퍼블리셔 임하나 입니다."],
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 100,
        cursorChar: '|',
        loop: true,
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);


   useEffect(()=>{
      const title = document.getElementsByTagName('title')[0];
      title.textContent = '임하나의 포트폴리오';
   },[]);

   return(
      <section className="section home">
         <h1 className="page-tit"><span>HOME</span></h1>
         <div className="intro">
            <div className="intro-img"><img src={process.env.PUBLIC_URL+'/assets/profileImage.png'} alt=""/></div>
            <div className="intro-info">
               <div className="intro-typing"><span id="typing"></span></div>
               <p>끊임없이 발전하며, 새로운 시도를 좋아하는 퍼블리셔입니다.<br/>모두에게 주어진 하루를 최선을 다해 살아가자는 목표를 가지고 있습니다</p>
               <h2 className="sub-tit">PERSONAL INFOS</h2>
               <ul className="intro-list">
                  <li><span>Name : </span><em>임하나</em></li>
                  <li><span>Date of birth : </span><em>1989.12.25</em></li>
                  <li><span>Phone : </span><em>010.9291.5190</em></li>
                  <li><span>Email : </span><em>imhana503@gmail.com</em></li>
               </ul>
               <a href="#" download title="이력서 다운로드" className="btn">이력서 다운로드</a>
            </div>
         </div>
      </section>
   )
}

export default Home;