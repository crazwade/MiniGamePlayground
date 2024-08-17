import{C as R}from"./ContainWrap-wyBoD-Gi.js";import{d as z,r as f,x as B,y as V,o as x,c as h,a as v,b as u,e as m,f as E,g as n,u as r,i as d,t as w,n as X,F as Y,l as I,m as N,p as j,q as O,_ as T}from"./index-DSDUjGfP.js";const _=c=>(j("data-v-2d8e25ce"),c=c(),O(),c),W={class:"border-white border-2 h-[300px]"},U={class:"flex flex-wrap justify-start items-center gap-3 mt-5 text-white"},$=_(()=>n("span",null,"Color: ",-1)),G=_(()=>n("span",null," Stroke Width: ",-1)),L={class:"text-black text-base"},A={class:"label text-black text-base flex font-mono"},q={class:"flex justify-center"},H=_(()=>n("code",{class:"javascript w-fit"},`
canvas:
  ref="paintCanvasRef"
  @mousemove="draw"
  @mousedown="drawStart"
  @mouseenter="resetMousePos"
  @mouseup="isDrawing = false"


// 開始下筆
const drawStart = (e: MouseEvent) => {
  if (!paintContext.value) {
    return;
  }

  isDrawing.value = true;
  mousePos.value = { x: e.offsetX, y: e.offsetY };
  paintContext.value.beginPath();
  paintContext.value.fillStyle = drawOption.color;
  paintContext.value.arc(mousePos.value.x, mousePos.value.y, drawOption.size * 0.6, 0, 2 * Math.PI);
  paintContext.value.fill();
  paintContext.value.closePath();
}

// 開始畫圖
const draw = (e: MouseEvent) => {
  if (!paintContext.value) {
    return;
  }

  if (!isDrawing.value) {
    return;
  }
  paintContext.value.beginPath();
  paintContext.value.strokeStyle = drawOption.color;
  paintContext.value.lineWidth = drawOption.size;
  paintContext.value.moveTo(mousePos.value.x, mousePos.value.y);
  paintContext.value.lineTo(e.offsetX, e.offsetY);
  paintContext.value.stroke();
  paintContext.value.closePath();

  mousePos.value = { x: e.offsetX, y: e.offsetY };
};

// 清除畫布
const resetBoard = () => {
  if (!paintContext.value) {
    return;
  }

  paintContext.value.clearRect(0, 0, paintCanvasRef.value.width, paintCanvasRef.value.height);
}

// 下載圖片
const downloadPNG = () => {
  const link = document.createElement('a');
  link.download = \`\${Date.now()}.png\`;
  link.href = paintCanvasRef.value.toDataURL();
  document.body.appendChild(link);
  link.click();
  link.remove();
}
          `,-1)),J=z({__name:"Paint",setup(c){const a=f(),t=f(null),p=f(!1),o=B({color:"#E63415",size:2}),i=f({x:0,y:0}),g=e=>{e.buttons===0&&(p.value=!1),i.value={x:e.offsetX,y:e.offsetY}},y=e=>{t.value&&p.value&&(t.value.beginPath(),t.value.strokeStyle=o.color,t.value.lineWidth=o.size,t.value.moveTo(i.value.x,i.value.y),t.value.lineTo(e.offsetX,e.offsetY),t.value.stroke(),t.value.closePath(),i.value={x:e.offsetX,y:e.offsetY})},P=e=>{t.value&&(p.value=!0,i.value={x:e.offsetX,y:e.offsetY},t.value.beginPath(),t.value.fillStyle=o.color,t.value.arc(i.value.x,i.value.y,o.size*.6,0,2*Math.PI),t.value.fill(),t.value.closePath())},k=()=>{t.value&&t.value.clearRect(0,0,a.value.width,a.value.height)},b=()=>{const e=document.createElement("a");e.download=`${Date.now()}.png`,e.href=a.value.toDataURL(),document.body.appendChild(e),e.click(),e.remove()};return V(()=>{t.value=a.value.getContext("2d"),a.value.width=a.value.parentElement.clientWidth,a.value.height=a.value.parentElement.clientHeight}),(e,s)=>{const F=m("el-color-picker"),D=m("el-option"),S=m("el-select"),C=m("el-button"),M=E("highlightjs");return x(),h("div",null,[v(R,{title:"Paint"},{game:u(()=>[n("div",W,[n("canvas",{ref_key:"paintCanvasRef",ref:a,onMousemove:y,onMousedown:P,onMouseenter:g,onMouseup:s[0]||(s[0]=l=>p.value=!1)},null,544)]),n("div",U,[n("div",null,[$,v(F,{modelValue:r(o).color,"onUpdate:modelValue":s[1]||(s[1]=l=>r(o).color=l),predefine:["#FF2600","#FF8400","#FFFB00","#2AFF00","#0026FF","#6F00FF","#BB00FF"],onActiveChange:s[2]||(s[2]=l=>r(o).color=l)},null,8,["modelValue"])]),n("div",null,[G,v(S,{modelValue:r(o).size,"onUpdate:modelValue":s[3]||(s[3]=l=>r(o).size=l),style:{width:"120px"}},{label:u(()=>[n("div",A,[d(w(r(o).size)+" px ",1),n("div",{class:X(["ml-1",`text-${r(o).size}xl`]),style:{"line-height":"inherit"}}," - ",2)])]),default:u(()=>[(x(),h(Y,null,I([2,4,6],l=>v(D,{value:l},{default:u(()=>[n("div",L,w(l)+" px ",1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),n("div",null,[v(C,{type:"info",onClick:k},{default:u(()=>[d(" Reset Board ")]),_:1})]),n("div",null,[v(C,{type:"primary",onClick:b},{default:u(()=>[d(" Download PNG ")]),_:1})]),d(" // todo redo // todo undo ")])]),code:u(()=>[N((x(),h("pre",q,[d("          "),H,d(`
        `)])),[[M]])]),_:1})])}}}),Z=T(J,[["__scopeId","data-v-2d8e25ce"]]);export{Z as default};
