import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";
import { createPersistedStatePlugin } from "pinia-plugin-persistedstate-2";
import { clone } from "pouchdb-utils";
import localforage from "localforage";
const pinia = createPinia();

const installPersistedStatePlugin = createPersistedStatePlugin({
  storage: {
    getItem: async (key) => {
      return await localforage.getItem(key);
    },
    setItem: async (key, value) => {
      return await localforage.setItem(key, value);
    },
    removeItem: async (key) => {
      return await localforage.removeItem(key);
    },
  },
  serialize: (value) => clone(value),
  deserialize: (value) => {
    // const foo = this; debugger
    return value;
  },
  persist: true,
});

pinia.use((context) => installPersistedStatePlugin(context));

loadFonts();

createApp(App).use(vuetify).use(pinia).mount("#app");
