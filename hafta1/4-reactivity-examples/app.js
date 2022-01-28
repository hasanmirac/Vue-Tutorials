const app = Vue.createApp({
  data() {
    return {
      search: "",
      itemList: ["elma", "armut", "kiraz", "çilek"],
    };
  },
  methods: {
    searchList() {
      const filteredList = this.itemList.filter((i) => i.includes(this.search));
      console.log("filteredList :>> ", filteredList);
    },
  },
}).mount("#app");
