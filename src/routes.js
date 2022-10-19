import CurrentLocation from './components/CurrentLocation/CurrentLocation.vue';
import Settings from './components/Settings/Settings.vue';
import Forecast from './components/Forecast/Forecast.vue';

export const routes = [
  { path: '/', component: CurrentLocation },
  { path: '/settings', component: Settings },
  { path: '/forecast', component: Forecast },
];
