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
                    <date-picker
                      v-model="time1"
                      valueType="format"
                    ></date-picker>
                  </div>
                  <div>
                    <label for="cellphone" style="text-align: left;"
                      >정렬</label
                    >
                    <input id="cellphone" type="text" v-model="cellphone" />
                  </div>
                  <!-- <button :disabled="!cellphone" type="submit" class="btn"> -->
                  <button type="submit" class="btn" @click="openModal6">
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
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
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
