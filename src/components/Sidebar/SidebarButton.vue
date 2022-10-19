<template>
  <router-link class="sidebar-button" :to="button.path">
    <i :class="button.icon"></i>
  </router-link>
</template>

<script>
export default {
  name: 'SidebarButton',
  props: ['button'],
};
</script>

<style lang="scss">
@import '../../assets/variables.scss';

.router-link-active {
  background-image: $button-gradient;
  border-left: 3px solid #fff !important;
}

.sidebar-button {
  width: calc(100% - 3px);
  height: 60px;
  display: flex;
  margin: auto;
  border-left: 3px solid transparent;

  &:focus {
    text-decoration: none;
  }

  i {
    font-size: 20px;
    margin: auto;
    color: #fff;
  }
}
</style>
