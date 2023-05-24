// let sales = 123_220_22
// let course = "Typescript"
// let isPublished = true;

// isPublished =  false
// let any: any;
// any= false
// any= "hello"

// let number: number[] = [1,2,3]

// number.map((n) => {
//   n.toString
//   // console.log(n)
// })

// // tuple is a fixed number element array
// //  name: Hridoy age: 21 married : false

// const person: [string, number, boolean ] = ["hridoy Khandakar", 22, false]

// // Enums refers to list of related content
// // should PascalCase
// const enum Size {Small =1 , Medium, Large}

// let mySize = Size.Medium
// console.log(mySize)

// Function in Typescript

// Make a function in typescript which take parameters an return somethings

// function myFunction (age: number, name = "unknown"): boolean{
//   if(age>18 ||name === "unknown"){

//     return true;
//   }
//   return false
// }

// let result = myFunction(15, "Hridoy")
// console.log(result)


// TYPESCRIPT OBJECTS
// OPTIONAL PROPERTY REFER BY ?

let employee: {
  readonly id: number,
  name: string,

} = { id: 1, name: "" };

// read only modifier 
employee.name = "Hridoy"
