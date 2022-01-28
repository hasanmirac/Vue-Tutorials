<template>
  <h3 class="bg-blue text-white">Blue Component</h3>
  <input type="text" />
</template>
<script>
export default {
  mounted() {
    console.log("Blue Mounted");
  },
  activated() {
    console.log("Blue Activated");
  },
  deactivated() {
    console.log("Blue Deactivated");
  },
};
</script>
