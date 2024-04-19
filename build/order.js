"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var constant_1 = require("./constant");
var Order = /** @class */ (function () {
    function Order(setItems, hasMemberCard) {
        this.setItems = setItems;
        this.hasMemberCard = hasMemberCard;
    }
    Order.prototype.checkMemberDiscount = function () {
        return this.hasMemberCard ? constant_1.MEMBER_DISCOUNT : 0;
    };
    Order.prototype.calcualteTotal = function () {
        var discount = this.checkMemberDiscount();
        var totalValue = this.setItems.map(function (item) { return item.calulate(); })
            .reduce(function (curResult, item) { return curResult + item; }, 0);
        console.log("The total Value", totalValue);
        return totalValue - (totalValue * discount);
    };
    return Order;
}());
exports.Order = Order;
