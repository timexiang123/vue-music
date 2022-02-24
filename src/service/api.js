import request from "./request";
//获取首页轮播图数据
export function getBannerData(){
    return request({
        url:"/banner?type=2"
    });
}
