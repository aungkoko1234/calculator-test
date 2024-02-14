import { MEMBER_DISCOUNT } from "./constant";
import { SetItem } from "./set-item";

export class Order {
    private setItems: SetItem[];
    private hasMemberCard: boolean;

    constructor(setItems: SetItem[], hasMemberCard: boolean) {
        this.setItems = setItems;
        this.hasMemberCard = hasMemberCard
    }

    private checkMemberDiscount(): number {
        return this.hasMemberCard ? MEMBER_DISCOUNT : 0
    }

    calcualteTotal() {
        const discount = this.checkMemberDiscount();
        const totalValue = this.setItems.map((item) => item.calulate())
            .reduce((curResult, item) => curResult + item, 0);
        console.log("The total Value", totalValue)
        return totalValue - (totalValue * discount)

    }

}