<template>
  <Sidebar />
  <div class="container">
    <Topbar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue';
import Topbar from './components/Topbar/Topbar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Topbar,
  },
};
</script>

<style lang="scss">
@import './assets/variables.scss';
body {
  background-color: $main-bg;
  color: #fff;
  margin: 0;
}

#app {
  margin: 10px;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  display: flex;

  .container {
    height: 100%;
    width: 100%;
  }
}
</style>
