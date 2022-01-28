<template>
  <div class="container">
    <div class="header">
      <h1>
        <slot name="title" />
      </h1>
    </div>
    <hr />
    <div class="content my-2">
      <slot name="content" />
    </div>
    <div>
      <slot />
    </div>
    <hr />
    <div class="footer text-right">
      <button>Kapat</button>
      <button @click="onSave()" class="green">Kaydet</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "content", "onSave"],
};
</script>
