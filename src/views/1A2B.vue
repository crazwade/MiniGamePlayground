<script setup lang='ts'>
import ContainWrap from '../components/ContainWrap.vue';
</script>

<template>
  <div>
    <ContainWrap
      :title="'1A2B'"
    >
      <template #game>
        <div class="flex justify-center items-center">
          game info
        </div>
      </template>
      <template #code>
        <pre v-highlightjs>
          <code class="javascript">
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
          </code>
        </pre>
      </template>
    </ContainWrap>
  </div>
</template>

<style lang="scss" scoped>

</style>
