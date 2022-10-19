<template>
  <div class='current-location_main box'>
    <div class='current-location_main-first'>
      <img class='current-location_main-icon' :src='`https://openweathermap.org/img/w/${data.weather[0].icon}.png`' />
      <div class='current-location_main-temp'>{{ Math.round(data.main.temp) }}°C</div>
      <div class='current-location_main-description'>
        {{ description }}
      </div>
    </div>
    <div class='current-location_main-second'>
      <div class='current-location_main-location'>{{ data.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentLocationMain',
  props: ['data'],
  computed: {
    description() {
      return this.data.weather[0].description.charAt(0).toUpperCase() + this.data.weather[0].description.slice(1);
    }
  }
}
</script>

<style lang='scss'>
.current-location_main {
  width: 200px;
}
</style>