import currentLocation from '../../assets/api/OpenWeather/currentLocation';

const state = {
  data: null,
};

const getters = {
  currentLocation: (state) => state.data,
};

const actions = {
  getCurrentLocation: async ({ commit }, { latitude, longitude }) => {
    const { getCurrentLocation } = currentLocation;
    const res = await getCurrentLocation(latitude, longitude);
    commit('setData', res.data);
  },
};

const mutations = {
  setData: (state, data) => {
    state.data = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
