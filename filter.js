const fruits = ['apple', 'banana', 'mango', 'orange']

fruits.filter((item, i)=> {
    return  item === 'banana'
})

console.log(


    fruits.filter((item, i)=> {
        return  item === 'banana'
    })
)


const numbers = [1, 10, 30, 45, 23, 89, 32, 90]

const some = numbers.filter((price)=> {
    return price<50  && price >30
})
// here price is the props. we can pass anything 
console.log(some)

const new_js = numbers.filter((item)=> {
    return item >45
})

console.log(new_js)