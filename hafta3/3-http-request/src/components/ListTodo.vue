<template>
  <ul v-if="itemCount > 0">
    <li v-for="item in itemsList" :key="item.id" class="d-flex justify-content-between align-items-center">
      <span>{{ item.title }}</span>
      <button @click="onDelete(item)" class="sm red">Sil</button>
    </li>
  </ul>
  <div v-else class="bg-blue text-white">Herhangi bir ürün yoktur.</div>
  <small class="mt-2 text-red d-flex justify-content-end align-items-center">{{ itemCount }} adet alınacak ürün vardır</small>
</template>
<script>
export default {
  props: ["itemsList", "itemCount", "onDelete"],
};
</script>
