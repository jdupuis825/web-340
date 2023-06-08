/*
============================================
; Title: team.js
; Author: Jocelyn Dupuis
; Date: 06/08/2023
; Description: JavaScript for Assignment 3.2
============================================
*/

// Strict mode applied to entire file
"use strict";

// Create class with properties for name, mascot, and playerCount
class Team {
    // Initialize classes properties in constructor 
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

// Export Team class
module.exports = Team;

