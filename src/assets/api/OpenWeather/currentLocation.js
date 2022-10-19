import axios from 'axios';
import { API_KEY } from '../../keys';
import { API_URL } from '../../urls';

export default {
  getCurrentLocation: (latitude, longitude) => {
    return axios.get(`${API_URL}`, {
      params: {
        lat: latitude,
        lon: longitude,
        units: 'metric',
        appid: API_KEY,
      },
    });
  },
};
