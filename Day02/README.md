# **Advance Type in Typescript**

<!-- Lis Item -->

1. Type Aliases
1. Union Types
1. Intersection types
1. Literal types
1. Nullable Types
1. Optional Chaining
1. Nullish Coalescing Operator
1. Type Assertion
1. The Unknown Type
1. The Never Type

---

### 1. Type Aliases

Create a Employee type using type aliases:

```typescript
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
```

create an object using Employee Type

```typescript
const employee: Employee = {
  id: 1,
  name: "Hridoy",
  retire: (date: Date) => {
    console.log(date);
  },
};
```

---

### 2. Union Types:

using union types we can give a variable or function more than one type. we use " | " bar to give more types

Example:

```typescript
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
```

### 3. Intersection Types:

in intersection types we can use more than one type. its another technique for combining type. we use **&** to combine types

```typescript
type Draggable:{
  drag: () => void
}

type Resizable: {
  resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox : UIWidget = {
  drag: () => {},
  resize: () => {}
}

```

### 4. Literal Types:

in Literal types we can use exact values for a variable

```typescript
// Literal Types
type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Metric = "cm" | "ich";
```

### 5. Nullable Types:

how can we use null value in typescript

```typescript
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}

greet("Hridoy");
greet(null);
```

### 6. Optional Chaining:

Optional chaining is a process for querying and calling properties, methods, and subscripts on an optional that might currently be nil . If the optional contains a value, the property, method, or subscript call succeeds; if the optional is nil , the property, method, or subscript call returns nil .

```typescript
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional Property Access Operator
console.log(customer?.birthday?.getFullYear());

let log: any = null;

// if only log refer to a function the the next line will execute
log?.("hello");
```

### 7. Nullish Coalescing Operator:

The nullish coalescing operator "??" is an alternative to || which returns the right-side expression if the left-side is null or undefined.

```typescript
let speed: number | null = null;
let raider = {
  speed: speed ?? 30,
};
```

### 8. Type Assertion:

Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.

```typescript
let name = Document.getElementById("name") as HTMLInputElement;
name.value;

let code: any = 123;
let employeeCode = <number>code;
```

### 9. Unknown Type:

Unknown is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.

```typescript
function render(document: unknown) {
  if (typeof document === "string") {
    document.toUpperCase();
  } else return 0;
}
```

### 10. Never Type:

TypeScript introduced a new type never, which indicates the values that will never occur.
The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception.

```typescript
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function keepProcessing(): never {
  while (true) {
    console.log("I always does something and never ends.");
  }
}

keepProcessing();
// the next line will never execute
console.log("hello");
```
