<script setup lang='ts'>
import ContainWrap from '../components/ContainWrap.vue';
</script>

<template>
  <div>
    <ContainWrap
      :title="'1A2B'"
    >
      <template #info>
        <div class="flex justify-center items-center">
          game info
        </div>
      </template>
      <template #code>
        <pre v-highlightjs>
        <code class="javascript">
function guessNumber(guess, answer) {
  if (!/^\d{4}$/.test(guess)) {
    return '請輸入四位數';
  }

  const answerSet = new Set([...answer]);
  const guessSet = new Set([...guess]);

  const [A, B] = answer.split('').reduce(([a, b], num, index) => {
    if (num === guess[index]) a++;
    if (answer.includes(num)) b++;
    return [a, b];
  }, [0, 0]);

  return `${A}A${B}B`;
}
</code>
</pre>
      </template>
    </ContainWrap>
  </div>
</template>

<style lang="scss" scoped>

</style>
