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

