import { BLACK_SET_DISCOUNT, SET_DISCOUNT } from "./constant";
import { SetColors, getDiscountSet, getPricePerSet } from "./utils"

describe('Utility Function - get Price Per Set', () => {
    test('Set Color - BLUE', () => {
        expect(getPricePerSet(SetColors.BLUE_SET)).toEqual(30)
    });

    test('Set Color - RED', () => {
        expect(getPricePerSet(SetColors.RED_SET)).toEqual(50)
    });
})

describe('Utitlity Function - get Discount PerSet', () => {
    test('Discount Eligible Color', () => {
        expect(getDiscountSet(SetColors.PINK_SET)).toEqual(SET_DISCOUNT)
    })

    test('Discount Not Eligible Color', () => {
        expect(getDiscountSet(SetColors.RED_SET)).toEqual(0)
    })

    test('Black Color Set',()=>{
        expect(getDiscountSet(SetColors.BLACK_SET)).toEqual(BLACK_SET_DISCOUNT)
    })
})