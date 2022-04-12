const sentence = "Son, if you ain't first you're last\n"

let compundDelay = 0
for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char);
  }, compundDelay) //replace with variable instead of time
  compundDelay += 80 //adds a 80 millisecond delay to every character in loop
};