<template>
  <div class="finds">
    <button class="findbtn" @click="openModal">아이디 찾기</button> |
    <button class="findbtn" @click="openModal2">비밀번호 찾기</button>
    <div :class="{ outer: isOpened }">
      <div v-if="isOpened" class="modal">
        <button
          @click="openModal"
          type="button"
          style="float: right;"
          class="btn-close-popup"
        >
          X
        </button>
        <p>아이디 찾기 페이지</p>
        <div class="contents">
          <form @submit.prevent="findIDForm" style="padding: 40px" class="form">
            <div>
              <label for="nickname" style="text-align: left;">이름:</label>
              <input id="nickname" type="text" v-model="nickname" />
            </div>
            <div>
              <label for="cellphone" style="text-align: left;"
                >휴대폰번호:</label
              >
              <input id="cellphone" type="text" v-model="cellphone" />
            </div>
            <!-- <button :disabled="!cellphone" type="submit" class="btn"> -->
            <button type="submit" class="btn">
              확인
            </button>
          </form>
          <p class="log">{{ logMessage }}</p>
        </div>
      </div>
    </div>
    <div :class="{ outer: isOpened2 }">
      <div v-if="isOpened2" class="modal">
        <p>비밀번호 찾기 페이지</p>
        <button @click="openModal2">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { findID } from '@/api/index';
export default {
  components: {},
  data() {
    return {
      isOpened: false,
      isOpened2: false,
    };
  },
  computed: {
    computedStyledObject() {
      return {
        position: this.classObject.position,
      };
    },
  },
  methods: {
    openModal() {
      this.isOpened = !this.isOpened;
    },
    openModal2() {
      this.isOpened2 = !this.isOpened2;
    },
    methods: {
      async findIDForm() {
        try {
          // 비즈니스 로직
          const userData = {
            nickname: this.nickname,
            cellphone: this.cellphone,
          };
          const { data } = await findID(userData);
          console.log(data);
          //   this.$router.push('/getuser');
        } catch (error) {
          // 에러 핸들링할 코드
          //   console.log(error.response.data);
          //   this.logMessage = error.response.data;
          console.log(error.response.data);
        } finally {
          this.initForm();
        }
      },
      initForm() {
        this.nickname = '';
        this.cellphone = '';
      },
    },
  },
};
</script>

<style scoped>
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
</style>
