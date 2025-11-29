// slow-module.js

// Simulate heavy computation (hashing, loops, math)
for (let i = 0; i < 1e9; i++) {
  Math.sqrt(i);
}

export default "done";
