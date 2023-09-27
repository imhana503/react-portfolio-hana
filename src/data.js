/* ABOUT  */
import { AiFillHtml5 } from 'react-icons/ai'; 
import { SiJavascript } from 'react-icons/si'; 
import { GrReactjs } from 'react-icons/gr'; 
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaListCheck } from 'react-icons/fa6';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
 
export const pojects = [
   {
      title:'아이나비',
      device:'PC',
      date:'2014.09',
      link:'https://www.inavi.com/',
   },
   {
      title:'아이나비2',
      device:'PC',
      date:'2014.10',
      link:'https://www.inavi.com/',
   },
   {
      title:'아이나비3',
      device:'PC',
      date:'2014.12',
      link:'https://www.inavi.com/',
   },
   {
      title:'피씨다!!!!!!!!!',
      device:'PC',
      date:'2015.12',
      link:'https://www.inavi.com/',
   },
   {
      title:'모바일!!!!!!!!!',
      device:'MOBILE',
      date:'2012.12',
      link:'https://www.inavi.com/',
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
      title:'HTML/CSS',
      icon:<AiFillHtml5 className="icon"/>,
      text:['htmlhtmlhtmlhtml','html2','html3'],
   },
   {
      title:'JQUERY',
      icon:<AiFillHtml5 className="icon" />,
      text:['html','html2','html3'],
   },
   {
      title:'JAVASCRIPT',
      icon:<SiJavascript className="icon"/>,
      text:['html','html2','html3'],
   },
   {
      title:'GIT',
      icon:<AiFillGithub className="icon"/>,
      text:['html','html2','html3'],
   },
   {
      title:'REACT',
      icon:<GrReactjs className="icon"/>,
      text:['html','html2','html3'],
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