<template>
  <div>
    <h3>Alışveriş Listesi</h3>
    <input type="text" placeholder="Bir şeyler yazın..." @keydown.enter="onSave" />
  </div>
</template>
<script>
export default {
  props: ["onSave"],
};
</script>
