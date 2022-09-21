console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

// // using promises

// const bringingTicket = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     },2000)
// })

// const getPopcorn = bringingTicket.then((t) => {
//     console.log('wife : i have got the ticket');
//     console.log('husband : lets go in and see the movie');
//     console.log('wife : no i need popcorn');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} popcorn`);
//     })
// })

// const getButter = getPopcorn.then((t) => {
//     console.log('husband : i got popcorn, lets go in and see the movie');
//     console.log('wife : no i need butter');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} butter`);
//     })
// })

// getButter.then((t) => {console.log(t)});



// // using async await

// const preMovie = async () => {}      one way to declare async function
async function preMovie(){                              // you can use await only inside async function

    const bringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 2000);
    })

    const ticket = await bringingTicket;

    console.log(`wife : i have got the ${ticket}`)
    console.log('husband : lets go and see the movie');
    console.log('wife : no i need popcorn');


    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('popcorn')
        }, 2000)
    });

    const popcorn = await getPopcorn;

    console.log(`husband : i have got the ${popcorn}`);
    console.log('husband : lets go and see the movie');
    console.log('wife : no i need butter on my popcorn');


    const getButter = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('butter');
        }, 2000);
    })


    const getColdDrinks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('cold drinks');
        }, 2000);
    })

    const [butter,coldDrinks] = await Promise.all([getButter, getColdDrinks]);    // resolve multiple promises which are not dependent on each other

    console.log(`husband : i got some ${butter} and ${coldDrinks}, now can we go and enjoy the movie`);
    console.log('wife : lets go');

    return 'ticket'
}

preMovie().then((t) => {console.log(`person3 : shows ${t}`)});

console.log('person4 : shows ticket');
console.log('person5 : shows ticket');