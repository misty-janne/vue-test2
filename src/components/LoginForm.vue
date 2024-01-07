<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <!-- <p class="validation-text">
            <span class="warning" v-if="username">
              Please enter an email address
            </span>
          </p> -->
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button :disabled="!password" type="submit" class="btn">
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
      <FindForms></FindForms>
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api/index';
// import { validateEmail } from '@/utils/validation';
import FindForms from '@/components/finds/FindForms.vue';

export default {
  components: {
    FindForms,
  },
  data() {
    return {
      // form values
      username: '',
      password: '',
      // log
      logMessage: '',
      // open: false,
      // open2: false,
    };
  },
  computed: {
    // isUsernameValid() {
    //   return validateEmail(this.username);
    // },
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.token);
        this.$store.commit('setToken', data.token);
        this.$store.commit('setUsername', data.user.username);
        this.$router.push('/main');
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
.btn {
  color: white;
}
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
