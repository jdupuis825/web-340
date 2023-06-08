/*
============================================
; Title: team-manager.js
; Author: Jocelyn Dupuis
; Date: 06/08/2023
; Description: JavaScript file for Assignment 3.2
============================================
*/

// Strict mode applied to entire file
"use strict";

const Team = require('./team');

let teams = [
    new Team("Buffalo Bills", "Billy Buffalo", 53),
    new Team("Philadelphia Eagles", "Swoop", 53),
    new Team("Kansas City Chiefs", "K. C. Wolf", 53),
    new Team("San Francisco 49ers", "Sourdough Sam", 53),
    new Team("Detroit Lions", "Roary", 53),
];

// Create function to return team array
function getTeams() {
    return teams;
}

// Create function that gets a single parameter for name
function getTeam(name) {
    return teams.find(team => team.name === name);
}

// Create function with single parameter for team 
function displayTeam(team) {
    const { name, mascot, playerCount } = team;
    return "Name: " + team.name + '\nMascot: ' + team.mascot + '\nPlayer Count: ' + team.playerCount + '\n';
}

module.exports = {
    getTeams,
    getTeam,
    displayTeam
};