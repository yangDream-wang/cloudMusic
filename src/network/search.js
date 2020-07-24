import $http from "./request";

// * 热搜
export const getSearchHot = () => $http.get('/search/hot')

// * 默认搜索
export const getSearchDefault = () => $http.get('/search/default')

// * 搜索歌曲
export const getSearchSong = (word) => $http.get(`/search?keywords=${word}`);


