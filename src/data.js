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
      title:'HeBA_Core 쇼핑몰',
      device:'PC',
      date:'2015.04',
      link:'#/',
      thumb: urls+'준비중입니다',
   },
   {
      title:'NH투자증권',
      device:'ResponsiveWeb',
      date:'2015.05',
      link:'https://m.nhqv.com/main/main',
      thumb: urls+'img_portfolio_respon01.jpg',
   },
   {
      title:'SM면세점 쇼핑',
      device:'PC',
      date:'2015.08',
      link:'http://www.smdutyfree.com/fcm001.do?goTo=main',
      thumb: urls+'img_portfolio_pc05.jpg',
   },
   {
      title:'호스피스완화의료',
      device:'PC',
      date:'2015.10',
      link:'http://hospice.cancer.go.kr/index.do',
      thumb: urls+'img_portfolio_pc06.jpg',
   },
   {
      title:'LG전자',
      device:'PC',
      date:'2015.12',
      link:'http://www.lge.co.kr/lgekor/main.do',
      thumb: urls+'img_portfolio_pc07.jpg',
   },
   {
      title:'미래에셋대우',
      device:'PC',
      date:'2016.09',
      link:'https://www.miraeassetdaewoo.com/',
      thumb: urls+'img_portfolio_pc08.jpg',
   },
   {
      title:'현대아울렛',
      device:'PC',
      date:'2017.12',
      link:'#',
      thumb: urls+'img_portfolio_pc09.jpg',
   },
   {
      title:'현대아울렛',
      device:'MOBILE',
      date:'2017.12',
      link:'#',
      thumb: urls+'img_portfolio_pc09.jpg',
   },
   {
      title:'LG유플러스(Roaming)',
      device:'PC',
      date:'2017.03',
      link:'http://www.uplus.co.kr/',
      thumb: urls+'img_portfolio_pc10.jpg',
   },
   {
      title:'SBC 중소기업연수원',
      device:'PC / Mobile',
      date:'2017.05',
      link:'http://sbti.sbc.or.kr:8111/sh_mai001_001.do',
      thumb: urls+'img_portfolio_pc11.jpg',
   },
   {
      title:'현대자동차',
      device:'ResponsiveWeb',
      date:'2017.09',
      link:'#',
      thumb: urls+'준비중입니다.jpg',
   },
   {
      title:'KEB 하나은행 기업뱅킹(운영)',
      device:'PC',
      date:'2017.11',
      link:'https://biz.kebhana.com/index.jsp',
      thumb: urls+'img_portfolio_pc12.jpg',
   },
   {
      title:'삼성카드 앱(키즈곰곰, 아지냥이, 베이비스토리, 인생락서)(운영)',
      device:'PC',
      date:'2018.07',
      link:'#',
      thumb: urls+'img_portfolio_mb06.jpg',
   },
   {
      title:'제주항공',
      device:'ResponsiveWeb',
      date:'2020.09',
      link:'https://www.jejuair.net/ko/main/base/index.do',
      thumb: urls+'img_portfolio_respon02.jpg',
   },
   {
      title:'IFRS9(재개발)',
      device:'PC',
      date:'2021.10 ',
      link:'#',
      thumb: urls+'준비중입니다',
   },
   {
      title:'교보생명',
      device:'PC / Mobile',
      date:'2022.03',
      link:'https://www.kyobo.com/',
      thumb: urls+'준비중입니다',
   },
   {
      title:'애큐온캐피탈',
      device:'PC / Mobil',
      date:'2020.09',
      link:'https://www.jejuair.net/ko/main/base/index.do',
      thumb: urls+'img_portfolio_respon02.jpg',
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