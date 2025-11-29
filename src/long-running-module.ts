// Simulate heavy computation (hashing, loops, math)
// To give the user time to navigate away

// start variable is used to prevent build tool from filtering out the loop
let start;
for (let i = 0; i < 10 ** 8.5; i++) {
  start = Math.sqrt(i);
}

console.log(start);

export default "done";
