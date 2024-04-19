import { BLACK_SET_DISCOUNT, SET_DISCOUNT } from "./constant";

export enum SetColors {
    RED_SET = 'RED_SET',
    GREEN_SET = 'GREEN_SET',
    BLUE_SET = 'BLUE_SET',
    YELLOW_SET = 'YELLOW_SET',
    PINK_SET = 'PINK_SET',
    PURPLE_SET = 'PURPLE_SET',
    ORANGE_SET = 'ORANGE_SET',
    BLACK_SET= 'BLACK_SET'
}

export const getPricePerSet = (set: SetColors): number => {
    switch (set) {
        case SetColors.RED_SET: return 50;
        case SetColors.GREEN_SET: return 40;
        case SetColors.BLUE_SET: return 30;
        case SetColors.YELLOW_SET: return 50;
        case SetColors.PINK_SET: return 80;
        case SetColors.PURPLE_SET: return 90;
        case SetColors.ORANGE_SET: return 120;
        case SetColors.BLACK_SET : return 500;
        default: return 0;
    }
}

export const getDiscountSet = (setColor: SetColors) => {
    const eligibleSets = [SetColors.ORANGE_SET, SetColors.PINK_SET, SetColors.GREEN_SET];
    if(eligibleSets.includes(setColor))
       return SET_DISCOUNT
    else if(setColor === SetColors.BLACK_SET)
       return BLACK_SET_DISCOUNT
    else
       return 0;
}

export const checkInput = (value: number) => {
    return value < 0 ? false : true
}