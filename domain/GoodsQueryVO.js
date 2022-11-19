export class GoodsQueryVO {
    _page = 0;
    _pageSize = 10;
    _keywords = "";
    _goodsIds = [];


    get page() {
        return this._page;
    }

    set page(value) {
        this._page = value;
    }

    get pageSize() {
        return this._pageSize;
    }

    set pageSize(value) {
        this._pageSize = value;
    }

    get keywords() {
        return this._keywords;
    }

    set keywords(value) {
        this._keywords = value;
    }

    get goodsIds() {
        return this._goodsIds;
    }

    set goodsIds(value) {
        this._goodsIds = value;
    }
}