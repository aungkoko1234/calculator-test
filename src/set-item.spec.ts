import { SetItem } from "./set-item";
import { SetColors } from "./utils";

describe('Set Item Without Discount', () => {
    const setItem = new SetItem(SetColors.RED_SET, 2)
    test('should be defined', () => {
        expect(setItem).toBeDefined()
    })

    test('amount should be correctly calculated', () => {
        expect(setItem.calulate()).toEqual(100)
    })
})

describe('Set Item With Zero Qunatity', () => {
    test('amount should be zero', () => {
        const setItem = new SetItem(SetColors.BLUE_SET, 0)
        expect(setItem.calulate()).toEqual(0)
    })
})

describe('Set Item With Bundle Discount', () => {
    test('Set Item with even quantity', () => {
        const setItem = new SetItem(SetColors.PINK_SET, 2)
        expect(setItem.calulate()).toEqual(152)
    })

    test('Set Item with odd quantity', () => {
        const setItem = new SetItem(SetColors.PINK_SET, 7)
        expect(setItem.calulate()).toEqual(536)
    })
})

describe('Black Set Item with Bundle Discount',()=> {
    test('Set Item with 3-multiplicible quantity',()=> {
        const setItem = new SetItem(SetColors.BLACK_SET,3)
        expect(setItem.calulate()).toEqual(1350)
    })

    test('Set Item with 3-multiplicible quantity',()=> {
        const setItem = new SetItem(SetColors.BLACK_SET,6)
        expect(setItem.calulate()).toEqual(2700)
    })

    test('Set Item with not 3-multiplicible quantity',()=> {
        const setItem = new SetItem(SetColors.BLACK_SET,2)
        expect(setItem.calulate()).toEqual(1000)
    })
})