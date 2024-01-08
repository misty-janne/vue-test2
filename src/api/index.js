import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 액시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 아이디 찾기 API
function findID(userData) {
  return instance.post('findid', userData);
}
// 비밀번호 찾기 API
function findPW(userData) {
  return instance.post('findpw', userData);
}

// 상담내역 데이터를 조회하는 API
function fetchPosts() {
  return instance.get('posts');
}

// 사용자 정보를 조회하는 API
function findByID(userData) {
  return instance.post('findbyid', userData);
}

export { registerUser, loginUser, fetchPosts, findID, findPW, findByID };
