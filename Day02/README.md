# **Advance Type in Typescript**

<!-- Lis Item -->

1. Type Aliases
1. Union Types

---

### Type Aliases

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

### Union Types:

using union type we can give a variable or function more than one type. we use " | " bar to give more types

Example:

```typescript
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
```
