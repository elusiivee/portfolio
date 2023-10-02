import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PieChart from './components/PieChart.vue'; // Adjust the path as needed


createApp(App)
  .use(router)
  .component('piechart', PieChart)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
