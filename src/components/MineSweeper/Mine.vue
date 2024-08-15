<script setup lang='ts'>
import { gameStatusEnum } from '../../stores/MineSweeper';

defineProps<{
  show: boolean;
  mine: number;
  status: gameStatusEnum;
}>();
</script>

<template>
  <div
    class="text-white border-white border-[0.5px] flex justify-center items-center w-[50px] h-[50px] text-4xl font-extrabold"
    :class="[
      status === gameStatusEnum.playing ? 'bg-gray-500' : '',
      status === gameStatusEnum.resultWin ? 'bg-green-500' : '',
      status === gameStatusEnum.resultLose ? 'bg-red-500' : '',
    ]"
  >
    <div v-if="show" class="flex justify-center items-center">
      <el-icon v-if="mine === -1"><CloseBold /></el-icon>
      <div v-else>
        {{ mine }}
      </div>
    </div>
    <p v-else>
      ?
    </p>
  </div>
</template>

<style lang="scss" scoped>

</style>
