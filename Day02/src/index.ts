// Create a New employee Type using type aliases

type Employee = {
  readonly id : number,
  name: string,
  retire: (date: Date) => void
}

// Create a Employee object

const employee: Employee = {
  id: 1,
  name: "Hridoy",
  retire: (date: Date) =>{
    console.log(date)
  }
}


//  Use of union type

function kgToLbs (weight: number| string): number{
  // Narrowing
  if ( typeof weight === "number")
  return weight*2.2
  else
  return parseInt(weight)*2.2 
}

let a = kgToLbs(10)
let b = kgToLbs("10kg")
console.log(a,b)



// Intersection types
//  we use &
//  both a number and string

type Draggable ={
  drag: () => void
}

type Resizable = {
  resize: () => void
}


type UIWidget = Draggable & Resizable;


let textBox: UIWidget = {
  drag: () => {},
  resize : () => {}
}


// Literal types


type Quantity= 50| 100;
let quantity : Quantity= 100

type Metric = "cm" | "ich"


// Nullable Types

function greeting(name: string | null | undefined){
  if(name)
    console.log(name.toUpperCase)
  else{
    // console.log("Hello")
  }
}

greeting(null)


// Optional Chaining
type Customer ={
  birthday?: Date
} 

function getCustomer(id?: number):Customer| null| undefined{
  return id === 0 ?null: {birthday: new Date()};
}


let customer = getCustomer(0)
// Optional property access operator
// console.log(customer?.birthday?.getFullYear())

// Optional element access operator
// customers?.[0]

// Optional call

let log: any = null
// if only log refer to a function the the next line will execute
log?.("hello")


// Nullish operator

let speed: number | null = null

console.log(speed??30)

// Type assertion 

let input = document.getElementById("name") as HTMLInputElement

input.value

let code: any = 123
let employeeCode = <number>code 

// The Unknown Type

function render(document:unknown): string|null|undefined {
  // narrowing
  if(typeof document === "string")
    return document.toUpperCase()
  else
  return null
}

// Never Type

function processing(reason:string ) : never{
  while(true)
    console.log(reason)
}

processing("error...")
console.log("Hello world")