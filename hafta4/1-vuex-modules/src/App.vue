<template>
  <p>
    {{ $store.state.mainName }}
  </p>
  <p>
    {{ $store.state.customer.contactName }}
  </p>
  <pre>
    {{ musteriAdi }}
  </pre>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  created() {
    console.log(this.$store.getters["customer/_contactName"]);
  },
  computed: {
    ...mapGetters({
      musteriAdi: "customer/_contactName",
    }),
  },
};
</script>
