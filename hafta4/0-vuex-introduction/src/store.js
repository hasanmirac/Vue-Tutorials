import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "Hasan Miraç",
      lname: "Gözen",
      age: 21,
      address: {},
      password: 121321,
      tc: 32323,
    },
    fullName: "Hasan Miraç Gözen",
    theme: "dark",
    permissions: [1, 2, 3, 4, 5],
    userList: ["Gökhan", "Tayfun", "Sude", "Ceylin", "Hasan", "Miraç"],
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "Tv", type: "elektronik" },
      { id: 4, title: "Monitör", type: "elektronik" },
    ],
  },
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    },
  },
  actions: {
    newItem({ commit }, item) {
      console.log(`item`, item);
      setTimeout(() => {
        // context.commit("newItem", item);
        commit("newItem", item);
      }, 1000);
    },
  },
  getters: {
    _woodItems: (state) => state.itemList.filter((i) => i.type === "mobilya"),
    _activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password;
      return user;
    },
  },
});

export default store;
