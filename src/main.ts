import "./assets/main.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./router";
import { MyPreset } from "./assets/customPrimevue";
const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: false || "none"
    }
  }
});
// app.use(PrimeVue, {
//   unstyled: true,
//   pt: Aura
// });

app.use(createPinia());
app.use(router);

app.mount("#app");
