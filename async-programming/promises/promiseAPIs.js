//! Dummy Promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P1 is rejected");
    }, 10)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 is rejected");
    }, 50)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P3 is rejected");
    }, 100)
})

//* Promise.all
Promise.all([p1, p2, p3]).then(result => console.log(result)).catch(err => console.log(err))

//* Promise.allSettled
Promise.allSettled([p1, p2, p3]).then(result => console.log(result)).catch(err => console.log(err))

//* Promise.race
Promise.race([p1, p2, p3]).then(result => console.log(result)).catch(err => console.log(err))

//* Promise.any
Promise.any([p1, p2, p3]).then(result => console.log(result)).catch(err => console.log(err))
