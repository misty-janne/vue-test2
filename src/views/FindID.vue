<script>
import { ref } from 'vue';
const open = ref(false);
console.log(open);
</script>

<template>
  <div>
    <button @click="open = true">Open Modal</button>
    <Teleport to="body">
      <div v-if="open" class="modal">
        <p>Hello from modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
