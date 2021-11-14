import axios from 'axios'
import { googleAPIKey } from '../../keys'

const KEY = googleAPIKey;

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 10,
      key: KEY
    },
    headers: {}
  });