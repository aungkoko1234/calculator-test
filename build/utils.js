"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiscountSet = exports.getPricePerSet = exports.SetColors = void 0;
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
        default: return 0;
    }
};
exports.getPricePerSet = getPricePerSet;
var getDiscountSet = function (setColor) {
    var eligibleSets = [SetColors.ORANGE_SET, SetColors.PINK_SET, SetColors.GREEN_SET];
    return eligibleSets.includes(setColor) ? constant_1.SET_DISCOUNT : 0;
};
exports.getDiscountSet = getDiscountSet;
