<template>
  <div class="form-area card border p-2">
    <div class="mb-3">
      <label for="title" class="form-label">Başlık</label>
      <input type="text" v-model="userData.title" class="form-control" id="title" placeholder="Vue ..." />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input type="text" v-model="userData.url" class="form-control" id="url" placeholder="https:// ..." />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Açıklama</label>
      <textarea type="text" v-model="userData.description" class="form-control" id="description" placeholder="Bu kitap ..."></textarea>
    </div>

    <div class="d-flex justify-content-end align-items-center">
      <button class="btn btn-sm btn-success me-2" @click="onSave">Kaydet</button>
      <button class="btn btn-sm btn-danger" @click="$router.push({ name: 'HomePage' })">İptal</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      this.$appAxios.post("/bookmarks", this.userData).then((save_response) => {
        console.log("save_response", save_response);
        this.resetData();
        this.$router.push({ name: "HomePage" });
      });
    },
    resetData() {
      Object.keys(this.userData).forEach((key) => (this.userData[key] = null));
    },
  },
};
</script>
