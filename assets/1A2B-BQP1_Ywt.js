import{d as r,o as t,c as n,a as e,t as _,r as o,_ as u,b as f,w as i,e as g,f as p,g as a}from"./index-DaVpLp15.js";const v={class:"w-full flex justify-center items-center flex-col gap-y-5 overflow-hidden"},h={class:"sm:text-[8rem] text-[6rem] font-extrabold leading-none rainbowText"},m={class:"w-full"},w={class:"w-full"},x={class:"w-full overflow-auto"},B=r({__name:"ContainWrap",props:{title:{}},setup(c){return(s,l)=>(t(),n("div",v,[e("div",h,_(s.title),1),e("div",m,[o(s.$slots,"game",{},void 0,!0)]),e("div",w,[e("div",x,[e("div",null,[o(s.$slots,"code",{},void 0,!0)])])])]))}}),S=u(B,[["__scopeId","data-v-d199efe2"]]),A=e("div",{class:"flex justify-center items-center"}," game info ",-1),j=e("code",{class:"javascript"},`
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
          `,-1),y=r({__name:"1A2B",setup(c){return(s,l)=>{const d=g("highlightjs");return t(),n("div",null,[f(S,{title:"1A2B"},{game:i(()=>[A]),code:i(()=>[p((t(),n("pre",null,[a("          "),j,a(`
        `)])),[[d]])]),_:1})])}}});export{y as default};
