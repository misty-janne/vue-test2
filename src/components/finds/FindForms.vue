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
              <label for="nickname" style="text-align: left;">이름</label>
              <input id="nickname" type="text" v-model="nickname" />
            </div>
            <div>
              <label for="cellphone" style="text-align: left;"
                >휴대폰번호</label
              >
              <input id="cellphone" type="text" v-model="cellphone" />
            </div>
            <!-- <button :disabled="!cellphone" type="submit" class="btn"> -->
            <button type="submit" class="btn" @click="openModal3">
              확인
            </button>
            <div :class="{ outer: isOpened3 }">
              <div v-if="isOpened3" class="alert">
                <button
                  @click="openModal3"
                  type="button"
                  style="float: right;"
                  class="btn-close-popup"
                >
                  X
                </button>
                <p>정보조회 불일치</p>
                <div class="contents">
                  해당하는 ID가 없습니다
                </div>
              </div>
            </div>
          </form>
          <p class="log">{{ logMessage }}</p>
        </div>
      </div>
    </div>
    <div :class="{ outer: isOpened2 }">
      <div v-if="isOpened2" class="modal">
        <button
          @click="openModal2"
          type="button"
          style="float: right;"
          class="btn-close-popup"
        >
          X
        </button>
        <p>비밀번호 찾기 페이지</p>
        <div class="contents">
          <form @submit.prevent="findPWForm" style="padding: 40px" class="form">
            <div>
              <label for="username" style="text-align: left;">아이디</label>
              <input id="username" type="text" v-model="unsername" />
            </div>
            <div>
              <label for="cellphone" style="text-align: left;"
                >휴대폰번호</label
              >
              <input id="cellphone" type="text" v-model="cellphone" />
            </div>
            <div>
              <label for="number" style="text-align: left;">인증번호</label>
              <input id="number" type="text" v-model="number" />
            </div>
            <!-- <button :disabled="!cellphone" type="submit" class="btn"> -->
            <button type="submit" class="btn" @click="openModal4">
              확인
            </button>
            <div :class="{ outer: isOpened4 }">
              <div v-if="isOpened4" class="alert">
                <button
                  @click="openModal4"
                  type="button"
                  style="float: right;"
                  class="btn-close-popup"
                >
                  X
                </button>
                <p>전송 실패</p>
                <div class="contents">
                  휴대폰 번호가 불일치 합니다. 다시 시도해 주세요.
                </div>
              </div>
            </div>
          </form>
          <p class="log">{{ logMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findID, findPW } from '@/api/index';
export default {
  components: {},
  data() {
    return {
      isOpened: false,
      isOpened2: false,
      isOpened3: false,
      isOpened4: false,
      username: '',
      nickname: '',
      cellphone: '',
      logMessage: '',
      number: '',
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
    openModal3() {
      this.isOpened3 = !this.isOpened3;
    },
    openModal4() {
      this.isOpened4 = !this.isOpened4;
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
      async findPWForm() {
        try {
          // 비즈니스 로직
          const userData2 = {
            username: this.username,
            cellphone: this.cellphone,
          };
          const { data } = await findPW(userData2);
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
