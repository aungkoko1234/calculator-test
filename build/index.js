"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("./order");
var set_item_1 = require("./set-item");
var utils_1 = require("./utils");
var order = new order_1.Order([new set_item_1.SetItem(utils_1.SetColors.RED_SET, 2),
    new set_item_1.SetItem(utils_1.SetColors.BLUE_SET, 3),
    new set_item_1.SetItem(utils_1.SetColors.PINK_SET, 5)], true);
console.log(order.calcualteTotal());
