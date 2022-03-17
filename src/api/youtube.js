import axios from "axios";

const KEY = "AIzaSyAMFREC-s9JmSRYCL7h9U33SYUfqq7BGu0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  },
  headers: {}
});
