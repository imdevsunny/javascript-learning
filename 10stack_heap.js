//primitve type (stack memory is used) copy is passed 
//non-primitive (heap memor is used) reference in passed

let myName='sunny'

let anotherMyName=myName

// console.log(anotherMyName)
// console.log(myName)

anotherMyName='imdevsunny'

console.log(anotherMyName)
console.log(myName)




//HEAP MEMORY
let userOne={
    email:'asdf@asdf.com',
    upi:'asdf@ybl'
}

let userTwo=userOne

// console.log(userOne)
// console.log(userTwo)

userTwo.email='imdevsunny@gmail.com'

console.log(userOne)
console.log(userTwo)