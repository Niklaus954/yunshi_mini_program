import {fetchGoodsList} from "../api/fetchGoodsList";

// 获取首页商品信息
export async function getGoodsList(goodsQueryVO, options) {
    const result = await fetchGoodsList(goodsQueryVO, options);
    if (result.length === 0) {
        goodsQueryVO.hasMore = false;
    }
    return result;
}