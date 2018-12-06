

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  for(var i = 0; i < katzDeliLine.length; i++){
    //katzDeliLine.push(`Welcome, ${name}. You are number ${i} in line.`)
  
  }
    return katzDeliLine
}

//takeANumber([], "welcome")















// 1) deli takeANumber adds a person to the line:
//     Error: Expected undefined to equal 'Welcome, Ada. You are number 1 in line.'
//       at assert (node_modules/expect/lib/assert.js:29:9)
//       at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//       at Context.it (test/index-test.js:14:44)

//   2) deli takeANumber appends the person the end of the line if there are already people on it:
//     Error: Expected undefined to equal 'Welcome, Grace. You are number 4 in line.'
//       at assert (node_modules/expect/lib/assert.js:29:9)
//       at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//       at Context.it (test/index-test.js:19:47)

//   3) deli takeANumber properly handles multiple people being added:

//       Error: Expected [] to equal [ 'Ada', 'Grace', 'Kent' ]
//       + expected - actual

//       -[]
//       +[
//       +  "Ada"
//       +  "Grace"
//       +  "Kent"
//       +]

//       at assert (node_modules/expect/lib/assert.js:29:9)
//       at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//       at Context.it (test/index-test.js:28:24)

//   4) deli nowServing returns the line is empty when no one is on line:
//     ReferenceError: nowServing is not defined
//       at Context.it (test/index-test.js:34:7)

//   5) deli nowServing returns an announcement about the person it is serving, and shifts the line:
//     ReferenceError: nowServing is not defined
//       at Context.it (test/index-test.js:39:7)

//   6) deli currentLine(line) returns "The line is currently empty." if no one isin line:
//     ReferenceError: currentLine is not defined
//       at Context.it (test/index-test.js:46:7)

//   7) deli currentLine(line) says who is in line when there are people waiting:
//     ReferenceError: currentLine is not defined
//       at Context.it (test/index-test.js:50:7)