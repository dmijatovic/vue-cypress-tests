<template>
  <section class="app-modal-section">
    <div class="app-modal-body">
      <header>
        <div data-test-id="app-modal-title">{{title}}</div>
        <button @click="closeMe" data-test-id="closeMe">Cancel</button>
      </header>
      <main>
        <slot />
      </main>
      <nav>
        <button data-test-id="app-modal-btn-yes" @click="()=>emitAnswer('YES')">Yes</button>
        <button data-test-id="app-modal-btn-no" @click="()=>emitAnswer('NO')">No</button>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppModal",
  props: {
    title: {
      type: "String",
      default: "Default tekst"
    }
  },
  methods: {
    closeMe() {
      this.$emit("closeModal", true);
    },
    emitAnswer(ans) {
      //console.log("emitAnswer...", ans);
      this.$emit("modalAnswer", ans);
    }
  }
};
</script>

<style scoped>
section {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #999;
  opacity: 0.95;
}

.app-modal-body {
  padding: 1rem;
  border: 1px solid lightgrey;
  min-width: 30vw;
}

header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

header div {
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  /* background-color: red; */
}

button {
  border: none;
  background-color: #fff;
  cursor: pointer;
}

nav button {
  padding: 1rem;
  border: 1px solid salmon;
  color: darkorchid;
  border-radius: 0.2rem;
}

nav button:last-child {
  background-color: red;
  color: #fff;
}
</style>