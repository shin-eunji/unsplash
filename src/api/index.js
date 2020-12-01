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
            data.client_id = 't_jbP7JejOj1keyZ7UiEl1BZcoPHG3vxmy3rPUGhVRc'
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
    photoRandom: (data) => Fetch.get(`https://api.unsplash.com/photos/random`, data),
    photoLike: (id) => Fetch.get(`https://api.unsplash.com/photos/${id}/like`),

    getTopics: (data) => Fetch.get(`https://api.unsplash.com/topics`, data),
    getTopicsBySlug: (slug) => Fetch.get(`https://api.unsplash.com/topics/${slug}`),

    searchPhotos: (data) => Fetch.get(`https://api.unsplash.com/search/photos`, data),
    searchCollections: (data) => Fetch.get(`https://api.unsplash.com/search/collections`, data),
}

export default API;