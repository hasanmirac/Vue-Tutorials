<template>
  <h1>Home</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint accusamus, inventore reprehenderit nostrum provident quisquam minima magni adipisci quis ducimus rerum. Maiores aliquam beatae corrupti assumenda dignissimos provident reiciendis
    fuga.
  </p>
  <input type="text" @keydown.enter="goToDetails" />
</template>

<script>
export default {
  methods: {
    goToDetails(e) {
      //   alert(e.target.value);
      //   this.$router.push(`/detay/${e.target.value}`);
      this.$router.push({
        name: "DetailPage",
        params: {
          userID: e.target.value,
        },
        query: {
          type: "DetailAuth",
          user: "hasanmirac",
        },
      });
    },
  },
};
</script>
