import{s as C,d as B,e as b,o as r,c as p,h as x,b as f,a as S,t as I,n as G,u as s,r as O,f as j,g as y,i as v,j as k,k as E,F as X,l as Y,m as $,v as V,p as L,q as N,_ as W}from"./index-Cn3Br-j0.js";import{C as D}from"./ContainWrap-revH0gj5.js";var c=(n=>(n.wait="等待中",n.playing="進行中",n.resultWin="贏了",n.resultLose="輸了",n))(c||{});const F=C("MineSweeper",{state:()=>({width:0,mineSum:0,mines:[],status:"等待中"}),getters:{getMines:n=>{let e=[],o=[],t=0;for(;t<n.width*n.width+1;)t%n.width===0&&t!==0&&(e.push(o),o=[]),o.push(n.mines[t]),t++;return e}},actions:{newMineSweeper(n,e){this.mines=[];const o=[],t=new Set;for(;o.length<e;){const m=Math.floor(Math.random()*n*n);t.has(m)||(o.push(m),t.add(m))}const h=Array.from({length:n*n},(m,i)=>({pos:[Math.floor(i/n),i%n],mines:t.has(i)?-1:0,show:!1}));for(const m of h){const{pos:i,mines:d}=m,[a,l]=i,w=a*n+l;if(d===-1)continue;const u=[[a-1,l-1],[a-1,l],[a-1,l+1],[a,l-1],[a,l+1],[a+1,l-1],[a+1,l],[a+1,l+1]];for(const[g,_]of u){if(g<0||g>=n||_<0||_>=n)continue;const M=g*n+_;h[M].mines===-1&&(h[w].mines+=1)}}this.mines=h,this.mineSum=e,this.width=n,this.status="進行中"},stepMine(n){if(this.status!=="進行中")return;const{pos:e,show:o,mines:t}=this.mines[n],[h,m]=e;if(!o)switch(t){case-1:this.status="輸了",this.isGameOver(!0),this.mines[n].show=!0;break;case 0:this.mines[n].show=!0;const i=[[-1,-1],[0,-1],[1,-1],[-1,1],[0,1],[1,1],[-1,0],[1,0]];for(const[d,a]of i){const l=h+d,w=m+a;if(l<0||l>=this.width||w<0||w>=this.width)continue;const u=(h+d)*this.width+m+a;this.stepMine(u)}this.isGameOver();break;default:this.mines[n].show=!0,this.isGameOver();break}},isGameOver(n=!1){if(n){this.status="輸了",this.mines.forEach(e=>{e.show=!0});return}if(this.mines.filter(e=>!e.show).length===this.mineSum){this.status="贏了",this.mines.forEach(e=>{e.show=!0});return}this.status}}}),A={key:0,class:"flex justify-center items-center"},q={key:1},z={key:1},R=B({__name:"Mine",props:{show:{type:Boolean},mine:{},status:{}},setup(n){return(e,o)=>{const t=b("CloseBold"),h=b("el-icon");return r(),p("div",{class:G(["text-white border-white border-[0.5px] flex justify-center items-center w-[50px] h-[50px] text-4xl font-extrabold",[e.status===s(c).playing?"bg-gray-500":"",e.status===s(c).resultWin?"bg-green-500":"",e.status===s(c).resultLose?"bg-red-500":""]])},[e.show?(r(),p("div",A,[e.mine===-1?(r(),x(h,{key:0},{default:f(()=>[S(t)]),_:1})):(r(),p("div",q,I(e.mine),1))])):(r(),p("p",z," ? "))],2)}}}),T=n=>(L("data-v-08cf4141"),n=n(),N(),n),U={class:"flex flex-col justify-center items-center gap-5"},H={class:"flex justify-center items-center sm:flex-row flex-col gap-3"},J={class:"max-w-fit w-full overflow-auto margin-auto"},K={class:"w-fit flex justify-center items-center flex-col"},P={class:"flex justify-center"},Q=T(()=>y("code",{class:"javascript w-fit"},`
/**
  * 生產踩地雷地圖
  *
  * @param {number} width 地圖長寬
  * @param {number} mineSum 地雷總數
  */
newMineSweeper(width: number, mineSum: number) {
  this.mines = [];

  const randomMines = [];
  const setMineMapBoom = new Set();

  // 隨機產生地雷
  while (randomMines.length < mineSum) {
    const random = Math.floor(Math.random() * width * width);
    if (!setMineMapBoom.has(random)) {
      randomMines.push(random);
      setMineMapBoom.add(random);
    }
  }

  // 產生踩地雷地圖
  const board: Mine[] = Array.from(
    { length: width * width }, (_, index) => (
      {
        pos: [ Math.floor(index / width) , index % width],
        mines:  setMineMapBoom.has(index) ? -1 : 0,
        show: false,
      }
    )
  );

  // 添加地雷周圍提示
  for(const mine of board) {
    const { pos, mines } = mine;
    const [ posX, posY ] = pos;
    const index = posX * width + posY;

    if (mines === -1) {
      continue;
    }

    // 井字周圍掃描
    const directions = [
      [posX - 1, posY - 1], // up left
      [posX - 1, posY], // up
      [posX - 1, posY + 1], // up right
      [posX, posY - 1], // left
      [posX, posY + 1], // right
      [posX + 1, posY - 1], // down left
      [posX + 1, posY], // down
      [posX + 1, posY + 1], // down right
    ];

    for (const [x, y] of directions) {
      // 判斷是否已經超出範圍
      if (x < 0 || x >= width  || y < 0 || y >= width ) {
        continue;
      }
      const targetIndex = x  * width + y;
      if (board[targetIndex].mines === -1) {
        board[index].mines += 1;
      }
    }
  }

  this.mines = board;
  this.mineSum = mineSum;
  this.width = width;
  this.status = gameStatusEnum.playing;
}

/**
  * 每一步的判斷流程
  *
  * @param {number} mineIndex 地雷的 index 索引值
  * @returns
  */
stepMine(mineIndex: number) {
  // 遊戲尚未開始不允許點擊
  if (this.status !== gameStatusEnum.playing) {
    return;
  }

  const { pos, show, mines } = this.mines[mineIndex];
  const [ posX, posY ] = pos;

  // 判斷是否已經打開
  if (show) {
    return;
  }

  switch(mines) {
    // 判斷是否為地雷 true 遊戲失敗
    case -1:
      this.status = gameStatusEnum.resultLose;
      this.isGameOver(true);

      this.mines[mineIndex].show = true;

      break;

    // 判斷地雷種類 如果為 0 則自動擴展地圖 (上下左右)
    case 0:
      this.mines[mineIndex].show = true;

      // 延續打開該地雷的上下左右
      const directions = [
        [-1, -1], // up left
        [0, -1], // up
        [1, -1], // up right
        [-1, 1], // down left
        [0, 1], // down
        [1, 1], // down right
        [-1, 0], // left
        [1, 0], // right
      ];

      for (const [x, y] of directions) {
        const newX = posX + x;
        const newY = posY + y;
        // 是否超出範圍
        if (newX < 0 || newX >= this.width || newY < 0 || newY >= this.width) {
          continue;
        }
        const neighborIndex = (posX + x) * this.width + posY + y;
        // 延續展開地圖
        this.stepMine(neighborIndex);
      }

      this.isGameOver();

      break;

    // 顯示地雷警告
    default:
      this.mines[mineIndex].show = true;
      this.isGameOver();

      break;
  }
}

/**
  * 判斷遊戲是否結束
  *
  * @param {boolean} stepOnBoom - 是否踩到地雷
  * @returns
  */
isGameOver(stepOnBoom: boolean = false) {
  // 踩到地雷遊戲結束
  if (stepOnBoom) {
    this.status = gameStatusEnum.resultLose;

    // 遊戲結束，翻開全部的地區
    this.mines.forEach((mine) => {
      mine.show = true;
    })

    return;
  }
  // 判斷是否結束遊戲 true 遊戲成功
  if (this.mines.filter((item) => !item.show).length === this.mineSum) {
    this.status = gameStatusEnum.resultWin;

    // 遊戲結束，翻開全部的地區
    this.mines.forEach((mine) => {
      mine.show = true;
    })

    return;
  }


  // 遊戲繼續
  if (this.status === gameStatusEnum.playing) {
    return;
  }
}
          `,-1)),Z=B({__name:"MineSweeper",setup(n){const e=F(),o=[{value:6,mine:6,label:"簡單"},{value:10,mine:12,label:"中等"},{value:16,mine:16,label:"困難"}],t=O({value:o[0].value,mine:o[0].mine,label:o[0].label}),h=m=>{m.preventDefault()};return(m,i)=>{const d=b("el-button"),a=b("el-option"),l=b("el-select"),w=j("highlightjs");return r(),p("div",null,[S(D,{title:"Minesweeper"},{game:f(()=>[y("div",U,[y("div",H,[s(e).status===s(c).wait?(r(),x(d,{key:0,type:"primary",onClick:i[0]||(i[0]=u=>s(e).newMineSweeper(s(t).value,s(t).mine))},{default:f(()=>[v(" Start Game ")]),_:1})):k("",!0),s(e).status===s(c).playing?(r(),x(d,{key:1,type:"warning",onClick:i[1]||(i[1]=u=>s(e).isGameOver(!0))},{default:f(()=>[v(" Stop Game ")]),_:1})):k("",!0),s(e).status===s(c).resultLose||s(e).status===s(c).resultWin?(r(),x(d,{key:2,type:"primary",onClick:i[2]||(i[2]=u=>s(e).newMineSweeper(s(t).value,s(t).mine))},{default:f(()=>[v(" New Game ")]),_:1})):k("",!0),S(l,{modelValue:s(t),"onUpdate:modelValue":i[3]||(i[3]=u=>E(t)?t.value=u:null),placeholder:"Select",style:{width:"100px"},disabled:s(e).status===s(c).playing},{default:f(()=>[(r(),p(X,null,Y(o,u=>S(a,{key:u.value,label:u.label,value:u},null,8,["label","value"])),64))]),_:1},8,["modelValue","disabled"])]),y("div",J,[y("div",K,[(r(!0),p(X,null,Y(s(e).getMines,(u,g)=>(r(),p("div",{key:g,class:"flex flex-row"},[(r(!0),p(X,null,Y(u,(_,M)=>(r(),x(R,{key:M,onContextmenu:V(h,["right"]),onClick:nn=>s(e).stepMine(g*s(e).width+M),show:_.show,mine:_.mines,status:s(e).status},null,8,["onClick","show","mine","status"]))),128))]))),128))])])])]),code:f(()=>[$((r(),p("pre",P,[v("          "),Q,v(`
        `)])),[[w]])]),_:1})])}}}),tn=W(Z,[["__scopeId","data-v-08cf4141"]]);export{tn as default};
