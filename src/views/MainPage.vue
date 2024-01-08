<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">상담 내역</h1>

      <!-- <LoadingSpinner v-if="isLoading"></LoadingSpinner> -->
      <!-- <ul v-else> -->

      <ul>
        <div style="float: right; ">
          2023.12.08 ~ 2024.01.08 · 최신순
          <button @click="openModal6">ㅁ</button>
          <div :class="{ outer: isOpened6 }">
            <div v-if="isOpened6" class="modal">
              <button
                @click="openModal6"
                type="button"
                style="float: right;"
                class="btn-close-popup"
              >
                X
              </button>
              <p>조회 기간</p>
              <div class="contents">
                <form
                  @submit.prevent="findIDForm"
                  style="padding: 40px"
                  class="form"
                >
                  <div>
                    <label for="nickname" style="text-align: left;"
                      >기간선택</label
                    >
                    <button class="btn-sm">
                      1주일
                    </button>
                    <button class="btn-sm">
                      1개월
                    </button>
                    <button class="btn-sm">
                      3개월
                    </button>
                    <button class="btn-sm">
                      직접입력
                    </button>
                    <date-picker
                      style="margin: 0.3rem; width:370px"
                      v-model="time3"
                      range
                    ></date-picker>
                  </div>
                  <div>
                    <label
                      for="cellphone"
                      style="margin: 0.3rem;text-align: left;"
                      >정렬</label
                    >
                    <button class="btn-sml">
                      최신순
                    </button>
                    <button class="btn-sml">
                      과거순
                    </button>
                  </div>
                  <br />
                  <!-- <button :disabled="!cellphone" type="submit" class="btn"> -->
                  <button class="btn-bl" @click="openModal6">
                    초기화
                  </button>
                  <button type="submit" class="btn-bl" @click="openModal6">
                    완료
                  </button>
                  <div :class="{ outer: isOpened7 }">
                    <div v-if="isOpened7" class="alert">
                      <button
                        @click="openModal7"
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
        </div>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></PostListItem>
      </ul>
      <!-- </ul> -->
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
// import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/index';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: {
    PostListItem,
    DatePicker,
    // LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
      isOpened6: false,
      isOpened7: false,
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      this.postItems = data.posts;
    },
    openModal6() {
      this.isOpened6 = !this.isOpened6;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
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
