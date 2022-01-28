<template>
  <app-header></app-header>
  <div class="container">
    <h3>Bu benim ilk Vue CLI uygulamam</h3>
    <p>Bugün component ve Vue CLI konularını görüyoruz</p>
  </div>
  <Counter-item></Counter-item>
  <Counter-item />
</template>

<script>
import CounterItem from "@/components/CounterItem";
export default {
  components: {
    CounterItem,
  },
};
</script>
