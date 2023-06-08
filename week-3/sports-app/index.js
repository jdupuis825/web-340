/*
============================================
; Title: index.js
; Author: Jocelyn Dupuis
; Date: 06/08/2023
; Description: JavaScript for Assignment 3.2
============================================
*/

// Strict mode applied to entire file
"use strict";

// Import the teamManager module from the team-manager JS file
const teamManager = require('./team-manager');

// Declare an array of the team objects
const teams = teamManager.getTeams();

// Declare two single team objects 
const bills = teamManager.getTeam("Buffalo Bills");
const eagles = teamManager.getTeam("Philadelphia Eagles");

// Output for display of ALL teams
console.log("-- DISPLAYING TEAMS --")
for (let team of teams) {
    console.log(teamManager.displayTeam(team))
}

// Output for first teams info
console.log("\n-- DISPLAYING A SINGLE TEAM --") + teamManager.displayTeam(bills);

// Output for second teams info
console.log("\n-- DISPLAYING A SINGLE TEAM --") + teamManager.displayTeam(eagles);
