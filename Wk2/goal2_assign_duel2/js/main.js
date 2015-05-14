/*jslint white: true, browser: true, devel: true*/
/*
     Name: Timothy Castillo
     Date: May 6, 2015
     Class & Section:  PWA1-1
     Comments: "Goal 1: Assignment: Duel #1"
 */

// Self-executing Function
(function () {

  // Invoke Strict Mode
  "use strict";

  console.log("Fight!");

  // Defining indexes for player names, damage base values, starting health values, and round

  var playerOne = ['Spider-Man', 20, 100],
    playerTwo = ['Batman', 20, 100],
    round;

  // var playerOneName,
  //   playerTwoName,
  //   player1Damage,
  //   player2Damage,
  //   playerOneHealth,
  //   playerTwoHealth,
  //   round;

  // // Player names
  // playerOneName = "Spider-Man";
  // playerTwoName = "Batman";

  // // Player damage
  // player1Damage = "20";
  // player2Damage = "20";

  // // Player health
  // playerOneHealth = "100";
  // playerTwoHealth = "100";

  // Round base value
  round = 1;

  // This function checks for the winner
  function winnerCheck() {
    // Sets local result variable to "no winner"
    var result="no winner";

    // If player 1 health and player 2 health are both below 1
    if (playerOne[2] < 1 && playerTwo[2] < 1){
      // Set result to "You Are Both Dead"
      result = "You Are Both Dead";
      // Else, if player 1 health is below 1
    } else if(playerOne[2] < 1) {
      // Player two is the winner
      result = playerTwo[0] + " Wins!";
      // Else if player 2 health is below 1
    } else if(playerTwo[2] < 1) {
      // Player one is the winer
      result = playerOne[0] + " Wins!";
    }
    // Return the end result, whether a draw or either win, to results = winnerCheck() value njbk
    return result;
  }

  // Fight Function
  function fight() {
    console.log("Checking in fight function");

    // Define variables for minimum damage, winner results and random damage functions
    var minDamage1,
      minDamage2,
      results,
      f1,
      f2,
      i;

    // String concatenation for Round Alert Window
    alert(playerOne[0] + " : " + playerOne[2] + " *START* " + playerTwo[0] + " : " + playerTwo[2]);

    for (i = 0; i < 10; i += 1){
      // Checking for i
      console.log(i);

      // Random formula is - Math.floor(Math.random() * (max - min) + min);

      // setting minimum damage to half of established player damage
      minDamage1 = playerOne[1]* 0.5;
      minDamage2 = playerTwo[1]* 0.5;

      //Formula to find damage
      f1 = Math.floor(Math.random() * (playerOne[1] - minDamage1) + minDamage1);
      f2 = Math.floor(Math.random() * (playerTwo[1] - minDamage2) + minDamage2);

      // Inflict Damage
      playerOne[2] -= f1;
      playerTwo[2] -= f2;

      // console.log(playerOne[2]);
      // console.log(playerTwo[2]);

      console.log(playerOne[0] + ": " + playerOne[2] + " " + playerTwo[0] + ": " + playerTwo[2]) ;

      // set results to the returned value of the winnerCheck function
      results = winnerCheck();
      console.log(results);

      // If results is equal to "no winner" begin a new round
      if(results === "no winner"){
        round+=1;
        // Display the names and remaining health points of the players
        alert(playerOne[0] + " : " + playerOne[2] + " *Round " + round + " OVER* " + playerTwo[0] + " : " + playerTwo[2]);
      } else {
        // Display end results, whether both died, or a single winner
        alert(results);
        // End loop
        break;
      }


  }
}

  // Invoke the fight function
  // The program is run when the reader gets to this line
  fight();

})();
