// Welcome to the magical zoo! Your task is to create and manage a list of magical creatures. Let's have some fun!

// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.

var creatureName = "Pegasus"

// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.

var creatureDescription = "It can fly like a bird and run as horse"

// 3. Do you believe that this creature is friendly to humans? 
// Declare a variable named 'isFriendly' and assign it a boolean value.

var isFriendly = true



// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
// Hint: Use Math.floor() to round a number up.
// Hint: Use Math.random() for generating random numbers.
// Returns a random integer from 0 to 9:
var visitorAge = Math.floor(Math.random() * 61);
console.log(visitorAge)
var stringling = "Can visit: "

// 5. Determine if the visitor is allowed to see the creature.
// Declare a variable named 'canVisit' and assign it an expression to see 
// if the visitorAge variable is greater than 15.
// Hint: use this resource if you need support: https://www.w3schools.com/js/js_booleans.asp 

canVisit = true
if (visitorAge > 15) {
  console.log(stringling + canVisit)
}


// 6. Combine all the information into a summary.
// Declare a variable named 'zooSummary' and combine all the above information using concatenation.

var zooSummary = "The creature's name is " + creatureName + " and " + creatureDescription + "!" + " Visitor Friendly? " + isFriendly + 
"." +" You must be at least 15 years old in order to see this creature!" 


// 7. Print the summary using console.log()

console.log(zooSummary)

// Challenge:
// 8. Now, imagine there are three more creatures in the zoo. 
//    Repeat Tasks 1-6 for each creature, then combine all summaries into a single variable 'allZooSummaries'.

// NEW ANIMAL ///////////////////////////////////////////////////
// Name
var creatureName1 = "Goomba"
// Description
var creatureDescription1 = "It's a nimble creature"
// Friendly 
var isFriendly1 = false
// Visitor Prerequisites
var visitorAge1 = Math.floor(Math.random() * 11);
var stringling1 = "Can visit: "
// Can visitor see creature
canVisit1 = true;
if (visitorAge1 > 15) {
  canVisit1 = true
  console.log(stringling1 + canVisit1)
} else {
  canVisit1 = false
  console.log(stringling1 + canVisit1)
}
// Summary
var zooSummary1 = " The creature's name is " + creatureName1 + " and " + creatureDescription1 + "!" + " Visitor Friendly? " + isFriendly1 + 
"." +" You must be at least 15 years old in order to see this creature!" 

// NEW ANIMAL ///////////////////////////////////////////////////
// Name
var creatureName2 = "Yoshi"
// Description
var creatureDescription2 = "It's a nimble creature which can float"
// Friendly 
var isFriendly2 = true
// Visitor Prerequisites
var visitorAge2 = Math.floor(Math.random() * 61);
var stringling2 = "Can visit: "
// Can visitor see creature
canVisit2 = true;
if (visitorAge2 > 15) {
  canVisit2 = true
  console.log(stringling2 + canVisit2)
} else {
  canVisit2 = false
  console.log(stringling2 + canVisit2)
}
// Summary
var zooSummary2 = " The creature's name is " + creatureName2 + " and " + creatureDescription2 + "!" + " Visitor Friendly? " + isFriendly2 + 
"." +" You must be at least 15 years old in order to see this creature!" 

// NEW ANIMAL ///////////////////////////////////////////////////
// Name
var creatureName3 = "Dragon"
// Description
var creatureDescription3 = "It's a fearsome creature which can destroy stuff"
// Friendly 
var isFriendly3 = false
// Visitor Prerequisites
var visitorAge3 = Math.floor(Math.random() * 61);
var stringling3 = "Can visit: "
// Can visitor see creature
canVisit3 = true;
if (visitorAge3 > 15) {
  canVisit3 = true
  console.log(stringling3 + canVisit3)
} else {
  canVisit1 = false
  console.log(stringling3 + canVisit3)
}
// Summary
var zooSummary3 = " The creature's name is " + creatureName2 + " and " + creatureDescription2 + "!" + " Visitor Friendly? " + isFriendly2 + 
"." +" You must be at least 15 years old in order to see this creature!" 

// 9. Print the 'allZooSummaries' to see the details of all the creatures in the magical zoo.

allZooSummaries = zooSummary + zooSummary1 + zooSummary2 + zooSummary3;
console.log(allZooSummaries)