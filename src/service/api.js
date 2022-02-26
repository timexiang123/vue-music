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
//获取歌手列表数据
export function getSingerList(initial){
    return request({
        url:"/artist/list?limit=10&type=-1&area=-1&initial="+initial
    });
}
