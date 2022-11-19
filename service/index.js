import {fetchGoodsList} from "../api/fetchGoodsList";

// 获取首页商品信息
export async function getGoodsList(goodsQueryVO) {
    const result = await fetchGoodsList(goodsQueryVO);
    if (result.length === 0) {
        goodsQueryVO.hasMore = false;
    }
    return result;
}