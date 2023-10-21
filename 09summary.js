// file includes various data types of javascript

//two types of datatypes broadly primitive and non-primitive (reference datatypes)
//on the basis of how they are stored in memory and accessed from memory 

//primitive (7 types)
//strings, Numbers, Boolean, Null, undefined, Symbol, BigInt

const customerName='John Doe'

const customerBalance=12345

const isCustomer=false

const temperature=null

let userEmail;

// console.log(userEmail)

const id =Symbol('asdf')
const anotherId= Symbol('asdf')

console.log(typeof id) // return datatype symbol

const scientificCalculation=123456789345678n //BigInt

//Non-Primitive (reference types)
// Arrays, Objects, Functions

const documents=['cv','license','marksheet'] //array

const userDetails={  //object
    userName:'John Doe',
    userAge:22
}

const myFunction = function(){
    console.log('imdevsunny')
}

//typeof method is used to print type of data

// console.log(typeof null)

// console.log(typeof myFunction) //it will return object function 
