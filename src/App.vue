<template>
  <div id="app">
    <Header />
    <Menu />
    <transition mode="out-in" name="slideQuad">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Modules/Header.vue';
import Menu from '@/components/Modules/Menu.vue';
import store from '@/store';

export default {
  components: {
    Header,
    Menu
  },
  async mounted() {
    await store.dispatch('items/getItem');
  }
};
</script>

<style lang="scss">
@import "./assets/Style/reset";
@import "./assets/Style/base";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.container {
  text-align: center;
}
</style>
