<template>
  <div class="container">
    <AddTodo :onSave="onSave" />
    <ListTodo :itemsList="itemsList" :itemCount="itemCount" :onDelete="onDelete" />
  </div>
</template>
<script>
import axios from "axios";
import AddTodo from "@/components/AddTodo";
import ListTodo from "@/components/ListTodo";
export default {
  components: {
    AddTodo,
    ListTodo,
  },
  data() {
    return {
      itemsList: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((items_response) => {
      console.log("items_response :>>>", items_response);
      this.itemsList = items_response.data || [];
      console.log("this.itemsList :>>>", this.itemsList);
    });
  },
  methods: {
    onSave(e) {
      console.log(e);
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false,
      };
      axios.post("http://localhost:3000/items", saveObject).then((save_response) => {
        console.log(save_response);
        this.itemsList.push(save_response.data);
        e.target.value = "";
        e.target.focus();
      });
    },
    onDelete(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`).then((delete_response) => {
        console.log(delete_response);
        this.itemsList = this.itemsList.filter((i) => i.id !== item.id);
      });
    },
  },
  computed: {
    itemCount() {
      return this.itemsList.length || 0;
    },
  },
};
</script>
