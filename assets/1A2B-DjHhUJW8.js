import{d as j,o as l,c as p,a as n,t as x,r as k,_ as V,b as h,w as A,e as w,f as u,g as C,h as q,u as t,i as b,j as _,k as y,l as I,n as $,T,F as D,m as F,p as M,q as R,s as W}from"./index-Ce9hcM7f.js";const z={class:"w-full flex justify-center items-center flex-col gap-y-5 overflow-hidden"},E={class:"sm:text-[8rem] text-[6rem] font-extrabold leading-none rainbowText"},L={class:"w-full"},P={class:"w-full"},U={class:"w-full overflow-auto"},H=j({__name:"ContainWrap",props:{title:{}},setup(r){return(s,d)=>(l(),p("div",z,[n("div",E,x(s.title),1),n("div",L,[k(s.$slots,"game",{},void 0,!0)]),n("div",P,[n("div",U,[n("div",null,[k(s.$slots,"code",{},void 0,!0)])])])]))}}),J=V(H,[["__scopeId","data-v-d199efe2"]]),K=(r,s)=>{const d=r.toString().split(""),o=new Set([...s]);let f=0,e=0;for(const[m,S]of d.entries())r[m]===s[m]?f+=1:o.has(S)&&(e+=1);return{A:f,B:e}},O=r=>(R("data-v-4335f454"),r=r(),W(),r),Q={class:"flex flex-col justify-center items-center gap-5"},X={class:"flex justify-center items-center"},Y={class:"flex flex-col justify-center items-center"},Z={class:"flex gap-5"},ee={key:0,class:"flex flex-col justify-center items-center mt-5 select-none"},te={class:"text-[1rem] flex flex-col-reverse font-mono max-h-[300px] overflow-y-auto overflow-x-hidden px-5 mt-5"},se=O(()=>n("code",{class:"javascript"},`
const game1A2B = (guess: string, answer: string) => {
  const guessString = guess.toString().split('');

  const answerSet = new Set([...answer]);

  let A = 0, B = 0;

  for(const [index, value] of guessString.entries()) {
    if (guess[index] === answer[index]) {
      A +=1;
    } else if (answerSet.has(value)) {
      B +=1;
    }
  }

  return {A, B};
};
          `,-1)),ne=j({__name:"1A2B",setup(r){const s=h(!1),d=h(""),o=h(""),f=h([]),e=h("等待中"),m=()=>{e.value="進行中";let a="";const c=new Set;for(let i=0;i<4;i++){const v=Math.floor(Math.random()*9+1);c.has(v)?i--:(a+=v,c.add(v))}d.value=a},S=()=>{e.value="結果"},G=()=>{if(!s.value){const a=K(o.value,d.value);f.value.push({result:`${a.A}A${a.B}B`,question:o.value})}};return A(()=>o.value,a=>{const c=/^(?!.*(.).*\1)[1-9][1-9][1-9][1-9]$/;if(o.value=a.trim(),!c.test(o.value)){s.value=!0;return}s.value=!1}),A(()=>e.value,a=>{a==="進行中"&&(o.value="",f.value=[])}),(a,c)=>{const i=C("el-button"),v=C("el-input"),N=q("highlightjs");return l(),p("div",null,[w(J,{title:"1A2B"},{game:u(()=>[n("div",Q,[n("div",X,[t(e)==="等待中"?(l(),b(i,{key:0,type:"primary",onClick:m},{default:u(()=>[_(" Start Game ")]),_:1})):y("",!0),t(e)==="進行中"?(l(),b(i,{key:1,type:"warning",onClick:S},{default:u(()=>[_(" Stop Game ")]),_:1})):y("",!0),t(e)==="結果"?(l(),b(i,{key:2,type:"primary",onClick:m},{default:u(()=>[_(" New Game ")]),_:1})):y("",!0)]),n("div",Y,[n("div",Z,[w(v,{modelValue:t(o),"onUpdate:modelValue":c[0]||(c[0]=g=>I(o)?o.value=g:null),style:{width:"120px"},placeholder:"Please input",class:$(["border-[2px] rounded-[5px]",[t(s)?"border-red-400":"border-green-400"]]),disabled:t(e)!=="進行中"},null,8,["modelValue","disabled","class"]),w(i,{type:"info",onClick:G,disabled:t(e)!=="進行中"||t(s)},{default:u(()=>[_(" 送出 ")]),_:1},8,["disabled"])]),t(e)!=="等待中"?(l(),p("div",ee,[n("div",{class:$(["text-[3rem] font-bold text-white",[t(e)==="進行中"?"blur-md":""]])},x(t(e)==="進行中"?"****":t(d)),3),n("div",te,[w(T,{name:"list"},{default:u(()=>[(l(!0),p(D,null,F(t(f),(g,B)=>(l(),p("div",{key:B}," 第 "+x(B+1)+" 次 => "+x(g.result)+" / "+x(g.question),1))),128))]),_:1})])])):y("",!0)])])]),code:u(()=>[M((l(),p("pre",null,[_("          "),se,_(`
        `)])),[[N]])]),_:1})])}}}),ae=V(ne,[["__scopeId","data-v-4335f454"]]);export{ae as default};
