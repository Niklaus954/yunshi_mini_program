import {fetchGoodsList} from "../api/fetchGoodsList";

// 获取首页商品信息
export async function getGoodsList(goodsQueryVO, options) {
    let result = await fetchGoodsList(goodsQueryVO, options);
    result = result.filter(item => item._status == 1);
    if (result.length === 0) {
        goodsQueryVO.hasMore = false;
    }
    return result;
}