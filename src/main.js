import { createApp } from 'vue'
import '@heartlandone/vega/style/vega.css';
import {VegaComponentLibrary} from "@heartlandone/vega-vue";

import App from './App.vue'

const app = createApp(App).use(VegaComponentLibrary);

VegaComponentLibrary.isReady().then(() => {
    app.mount('#app');
});