function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.PAIRS = {
  
  rock:     { scissors: 'crushes', lizard: 'doing mash'},
  paper:    { spock: 'disproves', rock: "cover"        },
  scissors: { paper: 'cuts', lizard: "decapitates"     },
  lizard:   { spock: 'poisons', paper: "eats"          },
  spock:    { rock: 'vaporises', scissors: "smashes"   }

	}


Game.prototype.winner = function() {

	if(this._isSamePick()) return null;

  if (this._victoryVerbFor(this.player1.pick, this.player2.pick)) {
    return this.player1;
  }
   else { 
     return this.player2;
  }
};

Game.prototype.looser = function() {
  
  return (this.winner() === this.player1) ? this.player2 : this.player1;

};

Game.prototype.winningMessage = function() {
  var message;

  if(this.winner()) {
    message = this.winner().name + " " + this._victoryVerbFor(this.winner().pick, this.looser().pick) + " " + (this.looser().name);
  }
  else {
    message = "Draw";
  }

  return message; 
};



Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};

Game.prototype._victoryVerbFor = function(pick, opponentPick) {
  return this.PAIRS[pick][opponentPick];
};












