<template>
  <div class="container">
    <UserSection />
    <!-- ilk userList başka herhangi bir şey  de olabilirdi -->
  </div>
</template>

<script>
import UserSection from "@/components/UserSection";
export default {
  components: {
    UserSection,
  },
  data() {
    return {
      provideData: {
        userList: ["Beyza", "Esra", "Elif", "Buse", "Zeynep", "İrem"],
      },
    };
  },
  methods: {
    newItem(item) {
      this.provideData.userList.push(item);
    },
  },
  provide() {
    return {
      userList: this.provideData.userList,
      newItem: this.newItem,
    };
  },
};
</script>
