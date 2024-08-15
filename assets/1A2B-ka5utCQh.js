import{d as G,r as v,w as k,o as l,c as g,a as x,b as c,e as A,f as N,g as u,u as t,h as b,i as f,j as w,k as q,n as C,t as y,T as I,F as D,l as T,m as $,p as F,q as M,_ as R}from"./index-Cn3Br-j0.js";import{C as z}from"./ContainWrap-revH0gj5.js";const E=(r,a)=>{const p=r.toString().split(""),s=new Set([...a]);let d=0,e=0;for(const[m,S]of p.entries())r[m]===a[m]?d+=1:s.has(S)&&(e+=1);return{A:d,B:e}},L=r=>(F("data-v-bfd38338"),r=r(),M(),r),P={class:"flex flex-col justify-center items-center gap-5"},U={class:"flex justify-center items-center"},W={class:"flex flex-col justify-center items-center"},H={class:"flex gap-5"},J={key:0,class:"flex flex-col justify-center items-center mt-5 select-none"},K={class:"text-[1rem] flex flex-col-reverse font-mono px-5 mt-5"},O={class:"flex justify-center"},Q=L(()=>u("code",{class:"javascript w-fit"},`
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
          `,-1)),X=G({__name:"1A2B",setup(r){const a=v(!1),p=v(""),s=v(""),d=v([]),e=v("等待中"),m=()=>{e.value="進行中";let n="";const i=new Set;for(let o=0;o<4;o++){const _=Math.floor(Math.random()*9+1);i.has(_)?o--:(n+=_,i.add(_))}p.value=n},S=()=>{e.value="結果"},j=()=>{if(!a.value){const n=E(s.value,p.value);d.value.push({result:`${n.A}A${n.B}B`,question:s.value})}};return k(()=>s.value,n=>{const i=/^(?!.*(.).*\1)[1-9][1-9][1-9][1-9]$/;if(s.value=n.trim(),!i.test(s.value)){a.value=!0;return}a.value=!1}),k(()=>e.value,n=>{n==="進行中"&&(s.value="",d.value=[])}),(n,i)=>{const o=A("el-button"),_=A("el-input"),V=N("highlightjs");return l(),g("div",null,[x(z,{title:"1A2B"},{game:c(()=>[u("div",P,[u("div",U,[t(e)==="等待中"?(l(),b(o,{key:0,type:"primary",onClick:m},{default:c(()=>[f(" Start Game ")]),_:1})):w("",!0),t(e)==="進行中"?(l(),b(o,{key:1,type:"warning",onClick:S},{default:c(()=>[f(" Stop Game ")]),_:1})):w("",!0),t(e)==="結果"?(l(),b(o,{key:2,type:"primary",onClick:m},{default:c(()=>[f(" New Game ")]),_:1})):w("",!0)]),u("div",W,[u("div",H,[x(_,{modelValue:t(s),"onUpdate:modelValue":i[0]||(i[0]=h=>q(s)?s.value=h:null),style:{width:"120px"},placeholder:"Please input",class:C(["border-[2px] rounded-[5px]",[t(a)?"border-red-400":"border-green-400"]]),disabled:t(e)!=="進行中"},null,8,["modelValue","disabled","class"]),x(o,{type:"info",onClick:j,disabled:t(e)!=="進行中"||t(a)},{default:c(()=>[f(" 送出 ")]),_:1},8,["disabled"])]),t(e)!=="等待中"?(l(),g("div",J,[u("div",{class:C(["text-[3rem] font-bold text-white",[t(e)==="進行中"?"blur-md":""]])},y(t(e)==="進行中"?"****":t(p)),3),u("div",K,[x(I,{name:"list"},{default:c(()=>[(l(!0),g(D,null,T(t(d),(h,B)=>(l(),g("div",{key:B}," 第 "+y(B+1)+" 次 => "+y(h.result)+" / "+y(h.question),1))),128))]),_:1})])])):w("",!0)])])]),code:c(()=>[$((l(),g("pre",O,[f("          "),Q,f(`
        `)])),[[V]])]),_:1})])}}}),ee=R(X,[["__scopeId","data-v-bfd38338"]]);export{ee as default};
