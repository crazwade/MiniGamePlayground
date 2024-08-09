<script setup lang='ts'>
import ContainWrap from '../components/ContainWrap.vue';
import { game1A2B } from '../common/1a2b';

enum gameStatusEnum {
  wait = '等待中',
  playing = '進行中',
  result = '結果',
}

const questionRegex = ref<boolean>(false);
const answer = ref<string>('');
const question = ref<string>('');
const process = ref<{
  result: string,
  question: string
}[]>([]);
const gameStatus = ref<gameStatusEnum>(gameStatusEnum.wait);

const startGame = () => {
  gameStatus.value = gameStatusEnum.playing;
  let result = '';
  const check = new Set();
  for (let i = 0; i < 4; i++) {
    const randomNum = Math.floor(Math.random() * 9 + 1);
    if (!check.has(randomNum)) {
      result += randomNum;
      check.add(randomNum);
    } else {
      i--;
    }
  }
  answer.value = result;
};

const newGame = () => {
  gameStatus.value = gameStatusEnum.result;
};

const submit = () => {
  if (!questionRegex.value) {
    const result = game1A2B(question.value, answer.value);

    process.value.push({
      result: `${result.A}A${result.B}B`,
      question: question.value
    });
  }
};

watch(() => question.value, (val: string) => {
  const regex = /^(?!.*(.).*\1)[1-9][1-9][1-9][1-9]$/;

  question.value = val.trim();

  if (!regex.test(question.value)) {
    questionRegex.value = true;
    return;
  }

  questionRegex.value = false;
});

watch(() => gameStatus.value, (val: gameStatusEnum) => {
  if(val === gameStatusEnum.playing) {
    question.value = '';
    process.value = [];
  }
});
</script>

<template>
  <div>
    <ContainWrap
      :title="'Vite'"
    >
      <template #game>
        <div class="flex flex-col justify-center items-center gap-5">
          <!-- 遊戲狀態控制區 -->
          <div class="flex justify-center items-center">
            <el-button
              type="primary"
              v-if="gameStatus === gameStatusEnum.wait"
              @click="startGame"
            >
              Start Game
            </el-button>
            <el-button
              type="warning"
              v-if="gameStatus === gameStatusEnum.playing"
              @click="newGame"
            >
              Stop Game
            </el-button>
            <el-button
              type="primary"
              v-if="gameStatus === gameStatusEnum.result"
              @click="startGame"
            >
              New Game
            </el-button>
          </div>
          <div class="flex flex-col justify-center items-center">
            <!-- 遊戲答題區 -->
            <div class="flex gap-5">
              <el-input
                v-model="question"
                style="width: 120px"
                placeholder="Please input"
                class="border-[2px] rounded-[5px]"
                :disabled="gameStatus !== gameStatusEnum.playing"
                :class="[questionRegex ? 'border-red-400' : 'border-green-400']"
              />
              <el-button
                type="info"
                @click="submit"
                :disabled="gameStatus !== gameStatusEnum.playing || questionRegex"
              >
                送出
              </el-button>
            </div>
            <!-- 遊戲題目區 -->
            <div v-if="gameStatus !== gameStatusEnum.wait" class="flex flex-col justify-center items-center mt-5 select-none">
              <div class="text-[3rem] font-bold text-white" :class="[ gameStatus === gameStatusEnum.playing ? 'blur-md' : '']">
                {{ gameStatus === gameStatusEnum.playing ? '****' : answer }}
              </div>
              <div class="text-[1rem] flex flex-col-reverse font-mono max-h-[300px] overflow-y-auto overflow-x-hidden px-5 mt-5">
                <TransitionGroup name="list">
                  <div v-for="(item, index) in process" :key="index">
                    第 {{ index + 1 }} 次 => {{ item.result }} / {{ item.question }}
                  </div>
                </TransitionGroup>
              </div>
            </div>
          </div>
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
.hljs {
  background: black !important;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
