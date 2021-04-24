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
import Divider from "primevue/divider";
import DeferredContent from "primevue/deferredcontent";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Card from "primevue/card";
app.use(PrimeVue, { ripple: true });
app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("DeferredContent", DeferredContent);
app.component("Divider", Divider);
app.component("Card", Card);

import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init();

app.mount("#app");
