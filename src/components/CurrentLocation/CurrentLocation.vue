<template>
  <div class='current-location'>
    <CurrentLocationMain 
      v-if='currentLocation' 
      :data='currentLocation' 
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CurrentLocationMain from './CurrentLocationMain.vue';

export default {
  name: "CurrentLocation",
  data() {
    return {
      location: {
        latitude: null,
        longitude: null
      }
    };
  },
  methods: {
    ...mapActions(['getCurrentLocation']),
    async getData(position) {
      this.location.latitude = position.coords.latitude;
      this.location.longitude = position.coords.longitude;
      const { latitude, longitude } = this.location;
      await this.getCurrentLocation({latitude, longitude});
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getData);
      }
    },
  },
  computed: {
    ...mapGetters(['currentLocation']),
  },
  mounted() {
    this.getLocation();
  },
  components: { CurrentLocationMain }
};
</script>
