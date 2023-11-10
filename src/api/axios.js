import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4fa1865c5307c097f35cdcb58db9b7de",
    language: "ko-KR",
  },
});

export default instance;
