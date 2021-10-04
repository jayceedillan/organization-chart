import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

const store: Store<{}> = new Vuex.Store<{}>({
  strict: process.env.NODE_ENV !== "production",
  state: {},
  actions: {},
  mutations: {},
  getters: {},
});

export default store;
