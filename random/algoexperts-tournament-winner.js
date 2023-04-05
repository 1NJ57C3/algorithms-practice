// Tournament Winner

// Round-robin tournament
// Two teams battle at a time
//  One home team
//  One away team
// Always one winner, no draws
// Team gets 3 points per win
// Team gets 0 points per loss

// Given array of paired competing teams and an array of pairing results, write a function that returns the winner of the tournament
// competitions = [ 
//   [homeTeam, awayTeam]
//   [homeTeam, awayTeam]
//   [homeTeam, awayTeam]
// ]

// results = [ ?, ?, ? ] where 0 === loser and 1 === winner based on homeTeam

// Each tournament is gauranteed to have exactly one winner and at least two teams

// Test case:
// competitions = [
//   ["HTML", "C#"],
//   ["C#", "Python"],
//   ["Python", "HTML"]
// ]

// results = [0, 0, 1]

// Expected result:
// "Python"
// C# beats HTML, Python beats C#, Python beats HTML.
//   HTML - 0 points
//   C# - 3 points
//   Python - 6 points

// Edge cases:
//   None?

// Solution:
// Iterate through `competitions` and assign score using `results`
//   Store team names (`competitions[i]`) in hashMap
//     if results is 0, awayTeam gets 3 points
//     if results is 1, homeTeam gets 3 points
//   Store points in hashMap with respective team
//   iterate through `hashMap` for team with highest score

function tournamentWinner(competitions, results) {
  const hashMap = {};

  for (let i = 0; i < results.length; i++) {
    // ^ 1 === exclusive or operator; flips result
    let winner = competitions[i][results[i] ^ 1];
    hashMap[winner] = hashMap[winner] + 3 || 3;
  }
  return Object.entries(hashMap).sort(([k1,v1],[k2,v2]) => v2 - v1)[0][0];
};