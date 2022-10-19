<template>
  <div class="sidebar">
    <img
      class="sidebar-logo"
      src="../../assets/icons/weather-icon-png-6.png"
      alt="..."
    />
    <div class="sidebar-buttons">
      <SidebarButton
        v-for="button in buttons"
        :key="button.name"
        :button="button"
      />
    </div>
  </div>
</template>

<script>
import SidebarButton from './SidebarButton.vue';

export default {
  name: 'Sidebar',
  data() {
    return {
      buttons: [
        {
          name: 'Current Location',
          icon: 'fas fa-map-marker-alt',
          path: '/',
        },
        {
          name: 'Forecast',
          icon: 'fas fa-calendar-alt',
          path: '/forecast',
        },
        {
          name: 'Settings',
          icon: 'fas fa-cog',
          path: '/settings',
        },
      ],
    };
  },
  components: {
    SidebarButton,
  },
};
</script>

<style lang="scss">
@import '../../assets/variables.scss';

.sidebar {
  min-width: 75px;
  height: 100%;
  background-color: $main-box-bg;
  border-radius: 10px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;

  .sidebar-logo {
    height: 50px;
    width: 50px;
    display: block;
    margin: 10px auto;
  }

  .sidebar-buttons {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin: calc(400% - 20px) auto auto auto;
  }
}
</style>
