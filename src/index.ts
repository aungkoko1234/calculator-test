import { Order } from "./order";
import { SetItem } from "./set-item";
import { SetColors, checkInput } from "./utils";
import prompt, { Schema } from "prompt";

const schema: Schema = {
    properties: {
        redSet: {
            description: "Please input the quantity for Red Set!",
            type: 'integer',
            message: "Input must be positive number",
            conform: checkInput,
            required: true
        },
        blueSet: {
            description: "Please input the quantity for Blue Set!",
            type: 'integer',
            message: "Input must be positive number",
            conform: checkInput,
            required: true
        },
        greenSet: {
            description: "Please input the quantity for Green Set!",
            type: 'integer',
            message: "Input must be positive number",
            conform: checkInput,
            required: true
        },
        yellowSet: {
            description: "Please input the quantity for Yellow Set!",
            type: 'integer',
            message: "Input must be positive number",
            conform: checkInput,
            required: true
        },
        pinkSet: {
            description: "Please input the quantity for Pink Set!",
            type: 'integer',
            message: "Input must be positive number",
            conform: checkInput,
            required: true
        },
        purpleSet: {
            description: "Please input the quantity for Purple Set!",
            type: 'integer',
            message: "Input must be positive number",
            conform: checkInput,
            required: true
        },
        orangeSet: {
            description: "Please input the quantity for Orange Set!",
            type: 'integer',
            message: "Input must be positive number",
            conform: checkInput,
            required: true
        },
        hasMemberShip: {
            description: "Do you have membership?",
            message: "Input must be boolean(true/false).",
            type: 'boolean',
            required: true
        }
    }
}

prompt.start()

prompt.get(schema, function (err, result) {
    //
    // Log the results.
    //
    if (err) {
        console.log(err)
    }
    console.log('Command-line input received:');
    console.log('red ' + result.redSet);
    console.log('green ' + result.greenSet);
    console.log('blue ' + result.blueSet);
    console.log('yellow ' + result.yellowSet);
    console.log('pink ' + result.purpleSet);
    console.log('purple ' + result.pinkSet);
    console.log('orange ' + result.orangeSet);
    console.log('has member ship', result.hasMemberShip)
    const { redSet, blueSet, greenSet, yellowSet,
        pinkSet, purpleSet, orangeSet, hasMemberShip } = result
    const order = new Order(
        [
            new SetItem(SetColors.RED_SET, redSet as number),
            new SetItem(SetColors.BLUE_SET, blueSet as number),
            new SetItem(SetColors.GREEN_SET, greenSet as number),
            new SetItem(SetColors.YELLOW_SET, yellowSet as number),
            new SetItem(SetColors.PURPLE_SET, purpleSet as number),
            new SetItem(SetColors.PINK_SET, pinkSet as number),
            new SetItem(SetColors.ORANGE_SET, orangeSet as number)
        ],
        hasMemberShip as unknown as boolean)
    console.log("The total result after discount will be", order.calcualteTotal())
});



