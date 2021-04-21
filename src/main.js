import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import "animate.css";
import "./registerServiceWorker";
import router from "./router";
app.use(router);

import "primevue/resources/themes/mdc-dark-deeppurple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
app.use(PrimeVue, { ripple: true });
app.component("Button", Button);
app.component("Dialog", Dialog);

app.mount("#app");
