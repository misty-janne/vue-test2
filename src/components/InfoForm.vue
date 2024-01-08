<template>
  <table>
    <tr>
      <th>이름</th>
      <th>연락처</th>
    </tr>
    <tr>
      <td>{{ nickname }}</td>
      <td>{{ cellphone }}</td>
    </tr>
  </table>
</template>

<script>
import { findByID } from '../api';
export default {
  data() {
    return {
      nickname: '',
      cellphone: '',
    };
  },
  methods: {
    async fetchData() {
      const { data } = await findByID();
      console.log(data);
      // this.users = data.users;
    },
  },
};
</script>

<style></style>
