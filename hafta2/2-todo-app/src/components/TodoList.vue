<template>
  <ul>
    <TodoListItem v-for="todoItem in myData" :key="todoItem.id" :item="todoItem" />
  </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem";
export default {
  // props: ["myData"],
  inject: ["provideData"],
  //   props: {
  //     myData: {
  //       type: String,
  //       required: false,
  //       default: "",
  //     },
  //   },
  components: {
    TodoListItem,
  },
};
</script>
