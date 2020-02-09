// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
console.log("Solution 1:")
var temp1 = 35
var temp2 = 350
var temp3 = 212

const checkTemp = temp => {
  if(temp === 212){
    return `${temp} is at boiling point`
  } else if (temp > 212){
    return `${temp} is above boiling point`
  } else if (temp < 212) {
    return `${temp} is below boiling point`
  }
}
console.log(checkTemp(temp1))
console.log(checkTemp(temp2));
console.log(checkTemp(temp3));

// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]
console.log("Solution 2:")
var myNumbers1 = [3, 7, 0, 6, -9]

const mult5 = array => {
  let newArr = []
  for(let i=0;i<array.length;i++){
    newArr.push(array[i]*5)
  }
  return newArr
}

console.log(mult5(myNumbers1));

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]
console.log("Solution 3:")
var myNumbers2 = [8, -7, 0, 6, 2]

const multMap5 = array => {
  let newArr = array.map(value => value *5)
  return newArr
}
console.log(multMap5(myNumbers2))



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"
console.log("Solution 4:")
var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"


const removeVowel = str => {
  let newStr = str.split("").filter(value => value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i" && value.toLowerCase()!== "o" && value.toLowerCase() !== "u").join("")
  // let newStr = newArr.filter(value => value !== "a" && value !== "e" && value !== "i" && value!== "o" && value !== "u").join("")
  return newStr
}
console.log(removeVowel(stringWithVowels1))
console.log(removeVowel(stringWithVowels2));

// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.
console.log("Solution 5:")
var notAString1 = true
var notAString2 = 42

const checkIfString = str => {
  if(typeof str !=="string") {
    return `${str} is not a string`
  } else {
    let newStr = str.toLowerCase().split("").filter(value => value !== "a" && value !== "e" && value !== "i" && value!== "o" && value !== "u").join("")
    return newStr
  }
}
console.log(checkIfString(notAString1));
console.log(checkIfString(notAString2));


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
console.log("Solution 6:")

var toonimals = [ {name: "Itchy", animal: "mouse"},
{name: "Stimpy", animal: "cat"},
{name: "Daffy", animal: "duck"},
{name: "Scratchy", animal: "cat"},
{name: "Ren", animal: "dog"},
{name: "Felix", animal: "cat"}]

const findCat = array => {
  let onlyCat = array.filter(value => value.animal === "cat")
  return onlyCat
}
console.log(findCat(toonimals));

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"
console.log("Solution 7:")
const nonCat = array => {
  let noCats = array.filter(value => value.animal !== "cat").map(value=>value.name).join(" ")
  return noCats
}
console.log(nonCat(toonimals))
