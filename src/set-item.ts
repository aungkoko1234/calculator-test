import { BLACK_SET_DISCOUNT } from "./constant";
import { SetColors, getDiscountSet, getPricePerSet } from "./utils";

export class SetItem {
    private setColor: SetColors;
    private quantity: number;
    constructor(setColor: SetColors, quantity: number) {
        this.setColor = setColor;
        this.quantity = quantity
    }

    private getBundleDiscount(setPrice: number) {
        const discount = getDiscountSet(this.setColor)
        if(this.setColor === SetColors.BLACK_SET)
        return setPrice * 3 * Math.floor(this.quantity /3) * discount
        else
        return setPrice * 2 * Math.floor(this.quantity / 2) * discount
    }



    calulate(): number {
        const setPrice = getPricePerSet(this.setColor)

        const totalDiscount = this.getBundleDiscount(setPrice)

        const total = (setPrice * this.quantity) - totalDiscount
        return total;
    }
}