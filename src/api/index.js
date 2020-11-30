import axios from 'axios';

const FetchConsts = {
    GET: 'get',
    POST: 'post'
}

const request = async (url, method, data = {}) => {


    try {

        const config = {
            method,
            url,

        }
        if(method === FetchConsts.GET) {
            config.params = data
        } else {
            config.data = data
        }

        console.log("result config", config);
        return (await axios(config))


    } catch(e) {

        if(e.response?.status === 401) {
                // 로그인 화면으로 이동
        }
    }

}

const Fetch = {
    get: (url, data) => request(url, FetchConsts.GET, data),
    post: (url, data) => request(url, FetchConsts.POST, data)
}

const API = {
    getPhotos: (data) => Fetch.get(`https://api.unsplash.com/photos`, data),
    getPhotoById: (id) => Fetch.get(`https://api.unsplash.com/photos/${id}`),

    getTopics: (data) => Fetch.get(`https://api.unsplash.com/topics`, data),
    getTopicsBySlug: (slug) => Fetch.get(`https://api.unsplash.com/topics/${slug}`),

    searchPhotos: (data) => Fetch.get(`https://api.unsplash.com/search/photos`, data),
}

export default API;