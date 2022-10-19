import { createStore } from 'vuex';
import currentLocation from './modules/currentLocation';

export const store = createStore({
  modules: {
    currentLocation,
  },
});
