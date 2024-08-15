<script setup lang="ts">
import Layout from './layout/Layout.vue';
import { version } from '../package.json';
</script>

<template>
  <Layout />
  <div class="fixed right-[5px] bottom-[5px] text-xs text-gray-500">
    ver {{ version }}
  </div>
</template>

<style scoped>
</style>
