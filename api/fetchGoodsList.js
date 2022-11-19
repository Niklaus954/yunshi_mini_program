import {GoodsResultVO} from "../domain/GoodsResultVO";

export function fetchGoodsList(goodsQueryVO) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (goodsQueryVO.page > 3) {
                resolve([]);
                return;
            }
            const goodsResult = new GoodsResultVO();
            goodsResult.id = 0;
            goodsResult.title = "title122321313242少烽各位的付出违法而GRE个人费尔巴哈人特润肺v35435464554";
            goodsResult.mainPic = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile07.zk71.com%2FFile%2FCorpProductImages%2F2014%2F06%2F05%2F0_chundao_2222_20140605141104.jpg&refer=http%3A%2F%2Ffile07.zk71.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671023708&t=d8488c3394f561b806cdb36bd7b950e8";
            goodsResult.subPics = [];
            goodsResult.description = "";
            goodsResult.merchant.name = "";
            goodsResult.merchant.phone = "";
            goodsResult.price = 12;
            goodsResult.originPrice = "34";
            goodsResult.rcTime = new Date();
            goodsResult.rmTime = new Date();
            resolve([goodsResult, goodsResult, goodsResult, goodsResult]);
        }, 2000);
    });
}