<script setup lang='ts'>
import { RouterView } from 'vue-router';

const router = useRouter();

const routerList = ref<{
  name: string,
  path: string,
}[]>([]);

onMounted(() => {
  routerList.value = router.getRoutes().map((route) => ({
    name: route.name as string,
    path: route.path,
  }));
});
</script>

<template>
  <div>
    <el-container>
      <el-header>
        <nav>
          <RouterLink
            v-for="(item, index) in routerList"
            :key="index"
            :to="item.path"
          >
            {{ item.name }}
          </RouterLink>
        </nav>
      </el-header>
      <el-main>
        <div class="px-6">
          <RouterView />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
