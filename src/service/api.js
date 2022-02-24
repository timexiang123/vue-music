import request from "./request";
//获取首页轮播图数据
export function getBannerData(){
    return request({
        url:"/banner?type=2"
    });
}
//获取首页推荐歌单数据
export function getPlayList(){
    return request({
        url:"/top/playlist?limit=30&cat=华语"
    });
}
