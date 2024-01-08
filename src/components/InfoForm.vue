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
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
