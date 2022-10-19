<template>
  <div class="topbar"></div>
</template>

<script>
export default {
  name: 'Topbar',
};
</script>

<style lang="scss">
@import '../../assets/variables.scss';

.topbar {
  width: calc(100% - 10px);
  height: 75px;
  background-color: $main-box-bg;
  border-radius: 10px;
  margin: 0 5px;
}
</style>
