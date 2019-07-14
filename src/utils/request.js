import axios from 'axios';

const RequestApi = axios.create();

RequestApi.defaults.baseURL =
  process.env.server || 'http://apis.timeline.ryulth.com/apis';

// 전처리 후처리 넣어줄것임

export default RequestApi;
