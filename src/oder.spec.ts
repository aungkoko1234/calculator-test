import { Order } from "./order";
import { SetItem } from "./set-item";
import { SetColors } from "./utils";
describe('Order with No membership discount ', () => {
    const setItems = [new SetItem(SetColors.BLUE_SET, 2), new SetItem(SetColors.RED_SET, 3)]
    const order = new Order(setItems, false)
    test('should be defined', () => {
        expect(order).toBeDefined()
    })

    test('amount should be correctly calculated', () => {
        expect(order.calcualteTotal()).toEqual(210)
    })
})

describe('Order with membership discount', () => {
    const setItems = [new SetItem(SetColors.BLUE_SET, 2), new SetItem(SetColors.RED_SET, 3)]
    const order = new Order(setItems, true)
    test('amount should be correctly calculated', () => {
        expect(order.calcualteTotal()).toEqual(189)
    })
})