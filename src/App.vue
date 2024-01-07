<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <router-view></router-view>
    </div>
    <!-- <FindForms></FindForms> -->
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
// import FindForms from '@/components/finds/FindForms.vue';

export default {
  components: {
    AppHeader,
    // FindForms,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
