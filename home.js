///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

const greetUser = (username) => console.log(`Welcome back, ${username}`);

//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

// use ternary operator for conciseness
const canWeDeliver = (zipCode, array = deliveryAreaZipCodes) => array.includes(zipCode) ? `You're in our delivery zone!` : `Sorry, we can't deliver to that address` 

console.log(canWeDeliver(85205));
console.log(canWeDeliver(94102));

/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

const canWeDeliverTwo = (zipCode, array = deliveryAreaZipCodes) => {
    for (const zip of deliveryAreaZipCodes) {
        if (zipCode !== zip) {
            return `Sorry, we can't deliver to that address.`
        } else {
            return `You're in our delivery zone!`
        }
    }
}

console.log(canWeDeliver(85205));
console.log(canWeDeliver(94102));


const canWeDeliverThree = (zipCode, array = deliveryAreaZipCodes) => {
    array.forEach((zipCode) => {
        if (zipCode !== zip) {
            return `Sorry, we can't deliver to that address.`
        } else {
            return `You're in our delivery zone!`
        }
    })
}

console.log(canWeDeliver(85205));
console.log(canWeDeliver(94102));

//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: 'This deal lasts until the end of March!'
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.

    (Hint: If you don't remember the `replace` method, there is an example
    in the handout for the "Intro to JS" lecture)
*/

// utilize regex to ensure non normalized variables are captured.
deals[0].title = deals[0].title.replace("15", "10");

console.log(deals[0]);



/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.
*/

// utilize regex to ensure any capitalizations are ignored
// note to self: at some point in the future think about how to create a title case function for capitalizing first letter of each
// word in the string.

deals[1].desc = deals[1].desc.replace(/March/i, "April");

console.log(deals[1])