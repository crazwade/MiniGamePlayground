<script setup lang='ts'>
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="
      w-full flex justify-center items-center
      flex-col gap-y-5 overflow-hidden
    "
  >
    <div
      class="
        sm:text-[8rem] text-[6rem] font-extrabold leading-none
        rainbowText
      "
    >
      {{ title }}
    </div>
    <div  class="w-full">
      <slot name="game"/>
    </div>
    <div class="w-full">
      <div class="w-full overflow-auto">
        <div>
          <slot name="code"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rainbowText {
  background: linear-gradient(60deg, red, red, orange, yellow, green, blue, indigo, violet, red, red);
  background-clip: text;
  color: transparent;
  display: inline-block;
}
</style>
