/*jslint white: true, browser: true, devel: true*/
/*
     Name: Timothy Castillo
     Date: May 6, 2015
     Class & Section:  PWA1-1
     Comments: "Goal 1: Assignment: Duel #1"
 */
// console.log('alert!');

// Self-executing Function
// (function () {

  // console.log("Fight!");

  // Defining indexes for player names, damage base values, starting health values, and round

  var players,
    round,
    player1Text,
    player2Text,
    roundText,
    startFight
    ;

  players = [
    {
      name:'Spider-Man',
      damage: 20,
      health: 100
    },
    {
      name:'Batman',
      damage: 20,
      health: 100
    }
  ];

  player1Text = document.querySelector('#kabal').querySelector('p');
  player2Text = document.querySelector('#kratos').querySelector('p');
  roundText = document.getElementById('round');
  startFight = document.getElementById('fight_btn');

  startFight.addEventListener("click", fight, false);

  // Round base value
  round = 0;

  // This function checks for the winner
  function winnerCheck() {

    // Invoke Strict Mode
    "use strict";

    // Sets local result variable to "no winner"
    var result="no winner";

    // If player 1 health and player 2 health are both below 1
    if (players[0].health < 1 && players[1].health < 1){
      // Set result to "You Are Both Dead"
      result = "You Are Both Dead";
      // Else, if player 1 health is below 1
    } else if(players[0].health < 1) {
      // Player two is the winner
      player2Text.innerHTML = players[1].name + " Wins!";

      // Else if player 2 health is below 1
    } else if(players[1].health < 1) {
      // Player one is the winner
      player1Text.innerHTML = players[0].name + " Wins!";

    }
    // Return the end result, whether a draw or either win, to results = winnerCheck() value njbk
    return result;
  }

  // Fight Function
  function fight() {

    // Invoke Strict Mode
    "use strict";

    console.log("Checking in fight function");

    // Define variables for minimum damage, winner results and random damage functions
    var minDamage1,
      minDamage2,
      results,
      f1,
      f2
      // i
      ;

    // String concatenation for Round Alert Window
    // alert(players[0].name + " : " + players[0].health + " *START* " + players[1].name + " : " + players[1].health);

    // for (i = 0; i < 10; i += 1){
      // Checking for i
      // console.log(i);

      // Random formula is - Math.floor(Math.random() * (max - min) + min);

      // setting minimum damage to half of established player damage
      minDamage1 = players[0].damage * 0.5;
      minDamage2 = players[1].damage * 0.5;

      //Formula to find damage
      f1 = Math.floor(Math.random() * (players[0].damage - minDamage1) + minDamage1);
      f2 = Math.floor(Math.random() * (players[1].damage - minDamage2) + minDamage2);

      console.log(f1 + 'cool');
      console.log(f2 + 'neat');

      // Inflict Damage
      players[0].health -= f1;
      players[1].health -= f2;

      // console.log(players[0].health);
      // console.log(players[1].health);

      player1Text.innerHTML = players[0].health;
      player2Text.innerHTML = players[1].health;

      console.log(players[0].name + ": " + players[0].health + " " + players[1].name + ": " + players[1].health);

      // set results to the returned value of the winnerCheck function
      results = winnerCheck();
      console.log(results);

      // If results is equal to "no winner" begin a new round
      if(results === "no winner"){
        round+=1;
        // Display the names and remaining health points of the players
        // alert(players[0].name + " : " + players[0].health + " *Round " + round + " OVER* " + players[1].name + " : " + players[1].health);
        roundText.innerHTML = "Round " + round + " Results";
      } else {
        roundText.innerHTML = "FINAL ROUND RESULTS!";
        startFight.innerHTML = "DONE!";
        // Display end results, whether both died, or a single winner
        // alert(results);
        // End loop
      }


  // }
}

  // Invoke the fight function
  // The program is run when the reader gets to this line
  // fight();

// })();
