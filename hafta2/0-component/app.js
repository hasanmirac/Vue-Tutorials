const app = Vue.createApp({
  data() {
    return {};
  },
});

app.component("counter-item", {
  data() {
    return {
      counter: 0,
    };
  },
  tempplate: `
    <div class="container">
        <h3 class="mb-2">{{counter}}</h3>
        <button @click="counter--" class="red-sm">-</button>
        <button @click="counter++" class="green-sm">+</button>
    </div>
  `,
});
app.mount("#app");
