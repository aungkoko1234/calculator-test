"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkInput = exports.getDiscountSet = exports.getPricePerSet = exports.SetColors = void 0;
var constant_1 = require("./constant");
var SetColors;
(function (SetColors) {
    SetColors["RED_SET"] = "RED_SET";
    SetColors["GREEN_SET"] = "GREEN_SET";
    SetColors["BLUE_SET"] = "BLUE_SET";
    SetColors["YELLOW_SET"] = "YELLOW_SET";
    SetColors["PINK_SET"] = "PINK_SET";
    SetColors["PURPLE_SET"] = "PURPLE_SET";
    SetColors["ORANGE_SET"] = "ORANGE_SET";
    SetColors["BLACK_SET"] = "BLACK_SET";
})(SetColors || (exports.SetColors = SetColors = {}));
var getPricePerSet = function (set) {
    switch (set) {
        case SetColors.RED_SET: return 50;
        case SetColors.GREEN_SET: return 40;
        case SetColors.BLUE_SET: return 30;
        case SetColors.YELLOW_SET: return 50;
        case SetColors.PINK_SET: return 80;
        case SetColors.PURPLE_SET: return 90;
        case SetColors.ORANGE_SET: return 120;
        case SetColors.BLACK_SET: return 500;
        default: return 0;
    }
};
exports.getPricePerSet = getPricePerSet;
var getDiscountSet = function (setColor) {
    var eligibleSets = [SetColors.ORANGE_SET, SetColors.PINK_SET, SetColors.GREEN_SET];
    if (eligibleSets.includes(setColor))
        return constant_1.SET_DISCOUNT;
    else if (setColor === SetColors.BLACK_SET)
        return constant_1.BLACK_SET_DISCOUNT;
    else
        return 0;
};
exports.getDiscountSet = getDiscountSet;
var checkInput = function (value) {
    return value < 0 ? false : true;
};
exports.checkInput = checkInput;
