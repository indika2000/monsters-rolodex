

console.log("Promises")


const myPromise = new Promise((resolve, reject) => {
            if(true){
                setTimeout( () => {resolve('I have succeeded')}, 2000)
            }
            else{
                reject('I have failed')
            }
            
        })

myPromise
    .then( value => console.log(value))
    .catch( rejectedValue => console.log(rejectedValue))


console.log("Filter Stuff");

const myArray = [1, 2, 3, 4, 5, 6, 7]

console.log( myArray.filter(
    el => {
       return el > 4
    }) );