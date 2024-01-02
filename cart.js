///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

// callback
// reduce is an array method, the arrays contain objects
// access the value for price for each iteration of the reduce method. 

/**
 *
 * @param {float} runningTotal 
 * @param {float} curElement 
 * @returns - callback function for reduce array method
 */


const callbackReduce = (runningTotal, curElement) => {
    return runningTotal + curElement.price;
}

const summedPrice = cart.reduce(callbackReduce,0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

/**
 * 
 * @param {float} cartTotal 
 * @param {float} couponValue 
 * @param {float} tax 
 * @returns - Final price of all cart items, including coupons and tax. 
 */

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const taxAmt = 1 + tax;
    const finalPrice = (cartTotal * taxAmt) - couponValue;

    return finalPrice;
}

console.log(calcFinalPrice(10.00,2,.1));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

// describe customer object

/**
 * 
 * @type     {object}
 * @property {string} item - item the customer is adding to the cart
 * @property {float} price - price of the item
 * @property {integer} quantity - quantity of the item
 * @property {array} tags - identifier for the nenu item, i.e. kids, special, etc,
 */

/*
    Now, create a customer object following your own
    guidelines.
*/

const cartObj = {
    item: "pizza",
    price: 10.00,
    quantity: 2,
    tags: ["kids", "lunch"]
}

console.log(cartObj);