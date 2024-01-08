<template>
  <div>
    <h1 class="page-header">마이 페이지</h1>
    <InfoForm></InfoForm>
  </div>
</template>

<script>
import InfoForm from '@/components/InfoForm.vue';
import { findByID } from '@/api/index';

export default {
  comments: {
    InfoForm,
  },
  data() {
    return {
      user: {
        username: '',
        cellphone: '',
      },
    };
  },
  methods: {
    async users() {
      const { data } = await findByID();
      this.user = data.users;
    },
  },
  created() {
    this.users;
  },
};
</script>

<style></style>
