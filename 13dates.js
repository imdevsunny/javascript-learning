//Dates

let myDate=new Date()
console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

console.log(typeof myDate);



//Declaring specific date
// let myCreatedDate= new Date(2023,0,23)
// let myCreatedDate= new Date('2023-10-26')//another method
let myCreatedDate= new Date('10-26-2023')//another method
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString())



//TIMESTAMPS
// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());


console.log(Math.floor(Date.now()/1000)); //time in seconds

//most useful
myCreatedDate.toLocaleString('defaut',{
    weekday:"long",
})



let newDate= new Date()

console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())