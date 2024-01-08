<template>
  <header>
    <div>
      <router-link to="/" class="logo">
        서비스내역
        <span v-if="isUserLogin">by {{ $store.state.username }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <!-- 1 -->
      <template v-if="isUserLogin">
        <router-link to="/info">내정보</router-link>
        <a href="javascript:;" @click="logoutConfirm" class="logout-button">
          로그아웃
        </a>
        <div :class="{ outer: isOpened5 }">
          <div v-if="isOpened5" class="alert">
            <button
              @click="openModal5"
              type="button"
              style="float: right;"
              class="btn-close-popup"
            >
              X
            </button>
            <p>로그아웃 하시겠습니까?</p>
            <button class="btn" @click="logoutUser">
              확인
            </button>
          </div>
        </div>
      </template>
      <!-- 2 -->
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <!-- <router-link to="/signup">회원가입</router-link> -->
      </template>
      <!-- <FindForm></FindForm> -->
    </div>
  </header>
</template>

<script>
// import FindForm from '@/components/finds/FindForms.vue';

export default {
  data() {
    return {
      isOpened5: false,
    };
  },
  components: {
    // FindForm,
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutConfirm() {
      this.isOpened5 = !this.isOpened5;
    },
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$router.push('/login');
      this.isOpened5 = !this.isOpened5;
    },
  },
};
</script>

<style scoped>
.username {
  color: white;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.logout-button {
  font-size: 14px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
.outer {
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.modal {
  padding: 40px;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: white;
  border-radius: 1.25rem;
}
.alert {
  padding: 40px;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: white;
  border-radius: 1.25rem;
}
</style>
