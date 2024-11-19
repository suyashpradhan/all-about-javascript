# **Promise APIs**

## Common Promises Lingo's

1. Once a promise is settled (got the result) it can be resolved or reject
2. Resolved can be called success or fulfilled and reject can be called failure or rejected

```
// Dummy Promises Data
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 is resolved")
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 is rejected")
    }, 500)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 is resolved")
    }, 300)
})
```

## 1. **Promise.all**

1. Takes an array of promises
2. Returns the result of the promises if all the promises are resolved in an array
3. If one of the promise fails then it stops the further execution and prints the error
4. Waits till all the promises are resolved and then only prints the results

```
Promise.all([p1, p2, p3]).then(result => console.log(result)).catch(err => console.log(err))

Success State
[ 'P1 is resolved', 'P2 is resolved', 'P3 is resolved' ]

Error State
P2 is rejected
```

## 2. **Promise.allSettled**

1. Takes an array of promises
2. Returns only when all the promises are settled
3. Returns the result of the promises irrespective of success or failure case
4. Returns with array of object with status and reason
5. Safest to use in all of them

```javascripthtml
Promise.allSettled([p1, p2, p3]).then(result => console.log(result)).catch(err => console.log(err))

Success State
[
  { status: 'fulfilled', value: 'P1 is resolved' },
  { status: 'fulfilled', value: 'P2 is resolved' },
  { status: 'fulfilled', value: 'P3 is resolved' }
]

Error State
[
  { status: 'rejected', reason: 'P1 is rejected' },
  { status: 'fulfilled', value: 'P2 is resolved' },
  { status: 'fulfilled', value: 'P3 is resolved' }
]
```

## 3. **Promise.race**

1. Takes an array of promises
2. The first settled (resolve or reject) promise will be returned.
3. The shortest time taking promise will be returned whether it is resolved or rejected

```javascripthtml
Promise.race([p1, p2, p3]).then(result => console.log(result)).catch(err => console.log(err))

Success State (P1 is of 1000ms and gets resolved)
P1 is resolved

Error State (P1 is of 1000ms and gets rejected)
P1 is rejected
```

## 4. **Promise.any**

1. Takes an array of promises
2. Only gives the resolved promise and ignores the rejected ones
3. If all the promises are rejected then throw special error called **Aggregator Error**
4. Aggregator error is collection of all the rejected promises in an array with rejected reason
5. To see the aggregator error inside catch you need to capture it through **err.errors**.

```javascripthtml
Promise.any([p1, p2, p3]).then(result => console.log(result)).catch(err => console.log(err))

Success State (P1 is of 10ms and gets resolved)
P1 is resolved

Error State (P1 & P2 is rejected and P3 is resolved)
P3 is resolved

Error State (All the promises are rejected)
[AggregateError: All promises were rejected] {
  [errors]: [ 'P1 is rejected', 'P2 is rejected', 'P3 is rejected' ]
}

```

