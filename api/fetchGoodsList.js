import {GoodsResultVO} from "../domain/GoodsResultVO";
import {API_CONSTANT} from "./commonApiConstant";
import {preHandle} from "./resultHandler";
import {getNullable} from "../util/commonUtil";

export function fetchGoodsList(goodsQueryVO, options) {
    if (goodsQueryVO.goodsIds && goodsQueryVO.goodsIds.length > 0) {
        return fetchGoodsByIds(goodsQueryVO, options);
    }
    return new Promise((resolve, reject) => {
        wx.request({
            url: API_CONSTANT.url + "/meteorolite/wx/item/pageQuery.json",
            data: {
                pageSize: goodsQueryVO.pageSize,
                pageIndex: goodsQueryVO.page,
                name: goodsQueryVO.keywords,
                itemIds: goodsQueryVO.goodsIds,
                order: "desc",
            },
            header: {
                token: getNullable('token', wx.getStorageSync('loginInfo')),
            },
            method: "post",
            dataType: 'json',
            success: function(res) {
                if (preHandle(res.data, reject, options)) {
                    const data = res.data.result;
                    if (data.data == null || data.data.length === 0) {
                        resolve([]);
                        return;
                    }
                    resolve(convert(data.data));
                }
            },
            fail: function(err) {
                reject(err.message);
            }
        });
    });
}

function fetchGoodsByIds(goodsQueryVO, options) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: API_CONSTANT.url + "/meteorolite/wx/item/pageQueryIds.json",
            data: {
                pageSize: goodsQueryVO.pageSize,
                pageIndex: goodsQueryVO.page,
                name: goodsQueryVO.keywords,
                itemIds: goodsQueryVO.goodsIds,
                order: "desc",
            },
            header: {
                token: getNullable('token', wx.getStorageSync('loginInfo')),
            },
            method: "post",
            dataType: 'json',
            success: function(res) {
                if (preHandle(res.data, reject, options)) {
                    const data = res.data.result;
                    if (data.data == null || data.data.length === 0) {
                        resolve([]);
                        return;
                    }
                    resolve(convert(data.data));
                }
            },
            fail: function(err) {
                reject(err.message);
            }
        });
    });
}

function convert(data) {
    return data.map(item => {
        const goodsResult = new GoodsResultVO();
        goodsResult.id = item.id;
        goodsResult.title = item.name;
        goodsResult.price = priceConvert(item.price);
        goodsResult.mainPic = item.pics.length > 0 ? item.pics[0] : "";
        goodsResult.subPics = item.pics.length > 1 ? item.pics.slice(1, item.pics.length) : [];
        goodsResult.description = item.desc;
        goodsResult.detail = item.detail;
        goodsResult.status = item.status;
        goodsResult.userId = item.userId;
        goodsResult.merchant.name = "";
        goodsResult.merchant.phone = "";
        return goodsResult;
    });
}

function priceConvert(price) {
    if (!price) {
        return "面议";
    }
    if (!price.amt) {
        return "面议";
    }
    return (price.amt / 100).toFixed(2);
}