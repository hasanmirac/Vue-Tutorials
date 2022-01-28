<template>
  <!-- <Modal :onSave="onSave" :title="'Modal Title'" :content="content" /> -->
  <Modal>
    <template #title>
      <h3>Slot ile gelen title bilgisi</h3>
    </template>
    <template v-slot:content>
      <p class="text-green">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum magnam, dolorem velit rerum ullam rem porro temporibus ipsam. Laborum magni nobis debitis nulla sint possimus, voluptas dolorem repellendus asperiores eos!
      </p>
    </template>
    <template #default> Bu default olarak gösterilecek </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      content: `<h3 class="text-red">Title</h3>`,
    };
  },
  methods: {
    onSave() {
      alert("Saved!!");
    },
  },
};
</script>
