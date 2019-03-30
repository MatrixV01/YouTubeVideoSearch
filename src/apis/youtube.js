import axios from 'axios';

const KEY = 'AIzaSyCVDNeHhaPOQoU8xbXCfU1wqNvK4MirSnk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
