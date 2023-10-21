//strings

let myName='sunny'

let myAge=22

// console.log(myName+''+myAge+''+' still learning') //depriciated method

//STRING INTERPOLATION


console.log(`Hello my name is ${myName} and my age is ${myAge}`) //efficient practice


const companyName= new String('NexGen')

// console.log(companyName)
// console.log(companyName.length) //6
// console.log(companyName.__proto__) //will return {} representing object


//contains methods also charAt,indexOf,slice, substring,trim, replace

console.log(companyName.charAt(0))
console.log(companyName.indexOf('N'))
console.log(companyName.slice(0,-1)) //last index not included
console.log(companyName.substring(0,4))//last index not included

const url='http//asdf.asdfasfaf'

console.log(url.replace('.','-'))

console.log(url.includes('asdf'))
 //returns true or false

console.log(url.split('.')) //returns array of splitted values


