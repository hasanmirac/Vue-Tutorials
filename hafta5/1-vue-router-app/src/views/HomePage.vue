<template>
  <div class="card border p-2">
    <div class="d-flex justify-content-start">
      <button class="btn btn-sm btn-primary" @click="$router.push({ name: 'NewBookmark' })">+ Yeni Ekle</button>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">URL</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
          <td scope="row">{{ bookmark.id }}</td>
          <td>{{ bookmark.title }}</td>
          <td>
            <a :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
          </td>
          <td>
            <button @click="deleteBookmark(bookmark)" class="btn btn-sm btn-danger">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    this.$appAxios.get("/bookmarks").then((bookmarks_list_response) => {
      this.bookmarkList = bookmarks_list_response.data || [];
    });
  },
  methods: {
    deleteBookmark(bookmark) {
      // console.log("bookmark :>>", bookmark);
      this.$appAxios.delete(`bookmarks/${bookmark.id}`).then((delete_response) => {
        console.log(delete_response);
        if (delete_response.status === 200) {
          this.bookmarkList = this.bookmarkList.filter((b) => b.id !== bookmark.id);
        }
      });
    },
  },
};
</script>
