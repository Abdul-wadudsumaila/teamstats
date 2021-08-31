const team = {
   _players: [{
     firstName: 'Kwame',
     lastName: 'Kojo',
     age: 25
   },
   {
     firstName: 'Abu',
     lastName: 'Kofi',
     age: 30
   },

   {
     firstName: 'Abdul',
     lastName: 'Wadud',
     age: 28
   }
   
   ],
   _games: [
     {
       opponents: 'RTU',
       teamPoints: 52,
       opponentPoints: 28
     },
     {
       opponents: 'Wa stars',
       teamPoints: 32,
       opponentPoints: 30
     },
     {
       opponents: 'Berukum Chelsea',
       teamPoints: 40,
       opponentPoints: 45
     }
   ],
    // getter method
   get players(){
      return this._players;
   },
   get games(){
     return this._games;
   },
    // Method for adding players
   addPlayer(firstName, lastName, age){
        let player = {
          firstName: firstName,
          lastName: lastName,
          age: age
        };
        this.players.push(player);
   },
     // Method of adding games
    addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  },
};
// Adding games to the team array
team.addGame('Zetuna', 90, 45);
team.addGame('Teko', 30, 15);
team.addGame('Wama', 50, 70);

// Adding players to team array
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

//printing out the players and games
console.log(team.games);
console.log(team.players)