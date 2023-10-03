/* ABOUT  */
import { AiFillHtml5 } from 'react-icons/ai'; 
import { SiJavascript } from 'react-icons/si'; 
import { GrReactjs } from 'react-icons/gr'; 
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaListCheck } from 'react-icons/fa6';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';

const urls = process.env.PUBLIC_URL+'/assets/';
 
export const pojects = [
   {
      title:'아이나비',
      device:'PC',
      date:'2014.09',
      link:'https://www.inavi.com/',
      thumb: urls+'img_portfolio_pc01.jpg',
   },
   {
      title:'맘스클럽',
      device:'MOBILE',
      date:'2014.11',
      link:'https://www.moms-club.co.kr/',
      thumb: urls+'img_portfolio_mb01.jpg',
   },
   {
      title:'코오롱',
      device:'PC',
      date:'2014.12',
      link:'https://www.kolon.com/main/main.do',
      thumb: urls+'img_portfolio_pc02.jpg',
   },
   {
      title:'코오롱',
      device:'MOBILE',
      date:'2014.12',
      link:'https://www.kolon.com/main/main.do',
      thumb: urls+'img_portfolio_pc02.jpg',
   },
   {
      title:'중국 CJ 쇼핑몰',
      device:'MOBILE',
      date:'2015.02',
      link:'#',
      thumb: urls+'img_portfolio_mb03.jpg',
   },
   {
      title:'두원공과대학교',
      device:'PC',
      date:'2015.03',
      link:'http://www.doowon.ac.kr/main.do',
      thumb: urls+'img_portfolio_pc01.jpg',
   },


   {
      title:'반응형이다',
      device:'ResponsiveWeb',
      date:'2011.12',
      link:'https://www.inavi.com/',
   },
]

export const abouts = [  
   {
      title:'HTML5/CSS/SCSS',
      icon:<AiFillHtml5 className="icon"/>,
      text:['검색엔진 최적화(SEO)','웹표준, 웹접근성을 준수한 시멘틱 마크업','CSS 최신문법, Sass(전처리기) 사용'],
   },
   {
      title:'JQUERY',
      icon:<SiJavascript className="icon" />,
      text:['jQuery UI 라이브러리','다양한 메소드로 DOM 조작'],
   },
   {
      title:'JAVASCRIPT',
      icon:<SiJavascript className="icon"/>,
      text:['ES6 자바스크립트 최신 문법','Vanilla JS기반 DOM 조작'],
   },
   {
      title:'GIT',
      icon:<AiFillGithub className="icon"/>,
      text:['git 형상관리'],
   },
   {
      title:'REACT',
      icon:<GrReactjs className="icon"/>,
      text:['컴포넌트 상태 관리'],
   },
]

export const navs = [
   {
      name:'Home',
      path:'/',
      icon:<AiFillHome/>,
   },
   {
      name:'About',
      path:'/about',
      icon:<BsFillPersonFill/>,
   },
   {
      name:'Project',
      path:'/project',
      icon:<FaListCheck/>,
   },
   {
      name:'Contact',
      path:'/contact',
      icon:<AiFillMail/>,
   },
   {
      name:'Git',  
      path:'http://www.naver.com',
      icon:<AiFillGithub/>,
   },
]