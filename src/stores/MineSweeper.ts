import { defineStore } from 'pinia';

export type Mine = {
  pos: [number, number];
  mines: number;
  show: boolean;
}

export enum gameStatusEnum {
  wait = '等待中',
  playing = '進行中',
  resultWin = '贏了',
  resultLose = '輸了',
};

export const useMineSweeperStore = defineStore('MineSweeper',  {
  state: () => <{
    width: number;
    mineSum: number;
    mines: Mine[];
    status: gameStatusEnum;
  }>({
    width: 0,
    mineSum: 0,
    mines: [],
    status: gameStatusEnum.wait,
  }),
  getters: {
    getMines: (state) => {
      let newMines: Mine[][] = [];
      let tmp: Mine[] = [];
      let index = 0;

      while(index < state.width * state.width + 1) {
        if (index % state.width === 0 && index !== 0) {
          newMines.push(tmp);
          tmp = [];
          tmp.push(state.mines[index])
        } else {
          tmp.push(state.mines[index])
        }

        index++;
      }

      return newMines;
    },
  },
  actions: {
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
    },
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
    },
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
    },
  }
});
