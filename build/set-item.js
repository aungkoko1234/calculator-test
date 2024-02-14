"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetItem = void 0;
var utils_1 = require("./utils");
var SetItem = /** @class */ (function () {
    function SetItem(setColor, quantity) {
        this.setColor = setColor;
        this.quantity = quantity;
    }
    SetItem.prototype.getBundleDiscount = function (setPrice) {
        var discount = (0, utils_1.getDiscountSet)(this.setColor);
        return setPrice * 2 * Math.floor(this.quantity / 2) * discount;
    };
    SetItem.prototype.calulate = function () {
        var setPrice = (0, utils_1.getPricePerSet)(this.setColor);
        var totalDiscount = this.getBundleDiscount(setPrice);
        var total = (setPrice * this.quantity) - totalDiscount;
        return total;
    };
    return SetItem;
}());
exports.SetItem = SetItem;
