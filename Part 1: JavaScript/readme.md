## Part 1

### Question:
What will the following JavaScript code output to the console?
```javascript
const array = [12, 10, 22, 5, 25];
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("The element in position " + i + " is: " + array[i]);
  }, 5000);
}
```

### Answer:
Loop: We loop through the array with var i. This means i is the same throughout the funtion.
setTimeout: We delay the console log by 5 seconds.

The Issue is that by the time the setTimeout runs, the loop has finished, and i has become 5 (the length of the array). There’s no element at index 5, so array[5] is undefined.

#### Output:
After 5 seconds, you’ll see this five times:
```
The element in position 5 is: undefined
```

#### Solution with let:
If we used let instead of var, this wouldn’t happen because let is block-scoped. Each iteration of the loop would have its own i.

Difference between let and var:
var is function-scoped: it’s the same throughout the entire function.

let is block-scoped: each iteration of the loop gets its own separate i.

Here's how the code looks with let:

```javascript
const array = [12, 10, 22, 5, 25];
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("The element in position " + i + " is: " + array[i]);
  }, 5000);
}
```
Now, each i inside the setTimeout refers to the correct element in the array, and you’ll see:
```
The element in position 0 is: 12
The element in position 1 is: 10
The element in position 2 is: 22
The element in position 3 is: 5
The element in position 4 is: 25
```

