<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AppModal
      v-if="modal.show"
      :title="modal.title"
      @closeModal="closeModal"
      @modalAnswer="modalAnswer"
    >
      <h1>Do you like it?</h1>
    </AppModal>
    <button data-test-id="btn-show-modal" @click="onShowModal" v-if="!modal.show">Show modal</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AppModal from "@/components/AppModal";

export default {
  name: "home",
  components: {
    HelloWorld,
    AppModal
  },
  data() {
    return {
      modal: {
        title: "Default title",
        show: false,
        answer: ""
      }
    };
  },
  methods: {
    closeModal() {
      console.log("Closemodal...");
      this.modal.show = false;
    },
    onShowModal() {
      this.modal.show = true;
    },
    modalAnswer(ans) {
      console.log("Emit answer...", ans);
      this.modal.ans = ans;
      this.modal.show = false;
    }
  }
};
</script>
