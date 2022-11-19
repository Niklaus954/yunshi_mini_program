import {Merchant} from "./Merchant";

export class GoodsResultVO {
    _id;
    _mainPic;
    _subPics;
    _title;
    _description;
    _price;
    _originPrice;
    _rcTime;
    _rmTime;
    _merchant = new Merchant();

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get originPrice() {
        return this._originPrice;
    }

    set originPrice(value) {
        this._originPrice = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get mainPic() {
        return this._mainPic;
    }

    set mainPic(value) {
        this._mainPic = value;
    }

    get subPics() {
        return this._subPics;
    }

    set subPics(value) {
        this._subPics = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get rcTime() {
        return this._rcTime;
    }

    set rcTime(value) {
        this._rcTime = value;
    }

    get rmTime() {
        return this._rmTime;
    }

    set rmTime(value) {
        this._rmTime = value;
    }

    get merchant() {
        return this._merchant;
    }

    set merchant(value) {
        this._merchant = value;
    }
}