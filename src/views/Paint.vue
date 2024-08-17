<script setup lang='ts'>
import ContainWrap from '../components/ContainWrap.vue';

const paintCanvasRef = ref();
const paintContext = ref<CanvasRenderingContext2D | null>(null);
const isDrawing = ref(false);
const drawOption = reactive({
  color: '#E63415',
  size: 2,
});
const mousePos = ref<{
  x: number;
  y: number;
}>({
  x: 0,
  y: 0,
});

// 如果畫筆超出範圍再進來重置滑鼠位置
const resetMousePos = (e: MouseEvent) => {
  if (e.buttons === 0) {
    isDrawing.value = false;
  }
  mousePos.value = { x: e.offsetX, y: e.offsetY };
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
  link.download = `${Date.now()}.png`;
  link.href = paintCanvasRef.value.toDataURL();
  document.body.appendChild(link);
  link.click();
  link.remove();
}

// init 畫布
onMounted(() => {
  paintContext.value = paintCanvasRef.value.getContext('2d');
  paintCanvasRef.value.width = paintCanvasRef.value.parentElement.clientWidth;
  paintCanvasRef.value.height = paintCanvasRef.value.parentElement.clientHeight;
});
</script>

<template>
  <div>
    <ContainWrap
      :title="'Paint'"
    >
      <template #game>
        <!-- Canvas 畫布區 -->
        <div class="border-white border-2 h-[300px]">
          <canvas
            ref="paintCanvasRef"
            @mousemove="draw"
            @mousedown="drawStart"
            @mouseenter="resetMousePos"
            @mouseup="isDrawing = false"
          />
        </div>
        <!-- 畫布工具選擇區 -->
        <div class="flex flex-wrap justify-start items-center gap-3 mt-5 text-white">
          <div>
            <span>Color: </span>
            <el-color-picker
              v-model="drawOption.color"
              :predefine="['#FF2600', '#FF8400', '#FFFB00', '#2AFF00', '#0026FF', '#6F00FF', '#BB00FF']"
              @active-change="(value: string) => drawOption.color = value"
            />
          </div>
          <div>
            <span>
              Stroke Width:
            </span>
            <el-select
              v-model="drawOption.size"
              style="width: 120px"
            >
              <el-option v-for="item in [2,4,6]" :value="item">
                <div class=" text-black text-base">
                  {{ item }} px
                </div>
              </el-option>
              <template #label>
                <div class="label text-black text-base flex font-mono">
                  {{ drawOption.size }} px
                  <div
                    class="ml-1"
                    :class="`text-${drawOption.size}xl`"
                    style="line-height: inherit"
                  >
                    -
                  </div>
                </div>
              </template>
            </el-select>
          </div>
          <div>
            <el-button type="info" @click="resetBoard">
              Reset Board
            </el-button>
          </div>
          <div>
            <el-button type="primary" @click="downloadPNG">
              Download PNG
            </el-button>
          </div>
          // todo redo
          // todo undo
        </div>
      </template>
      <template #code>
        <pre v-highlightjs class="flex justify-center">
          <code class="javascript w-fit">
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
  link.download = `${Date.now()}.png`;
  link.href = paintCanvasRef.value.toDataURL();
  document.body.appendChild(link);
  link.click();
  link.remove();
}
          </code>
        </pre>
      </template>
    </ContainWrap>
  </div>
</template>

<style lang="scss" scoped>
.hljs {
  background: black !important;
}
.el-tag {
  border: none;
  aspect-ratio: 1;
}
</style>
