import { createStore } from "vuex";
import contact from "./modules/contact";
import taskManager from "./modules/taskManager";

const store = createStore({
  state: {
    mainName: "Hasan Miraç Gözen",
  },
  modules: {
    customer: contact,
    taskManager,
  },
});

export default store;
