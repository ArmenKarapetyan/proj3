class Grass{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
		
	}

	newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}


	getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	mul(){
		this.multiply++;
		if(this.multiply == 3){
			var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);
			
			if(cord){
				var x = cord[0];
				var y = cord[1];
				this.multiply = 0;

				var norXot = new Grass(x,y,this.index);
				xotArr.push(norXot);

				matrix[y][x] = 1;
				
			}
			this.multiply = 0;
		}
	}

	

}

class antiGrass{

	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 1;
		this.multiply = 0;
		this.xp = 3;
		
	}

	newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}

	getDirections(t,b){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
				else if(matrix[y][x] == b){
					found.push(this.directions[i]);
				}
				
			}
		}
		return found;
	}


	
	mul(){
			if(this.energy == 6){
				var emptyCord = this.getDirections(0);

				var cord = random(emptyCord);
				
				if(cord){
					var x = cord[0];
					var y = cord[1];
					this.energy == 0;

					var norAnti = new antiGrass(x,y,this.index);
					antixot.push(norAnti);

					matrix[y][x] = 2;
					
				}
				this.energy = 0;
			}
		}	



	eat(){
		this.multiply++;
		
		if(this.multiply == 3){
		var emptyCord = this.getDirections(1,0);

			var cord = random(emptyCord);
			
			if(cord){
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 2;
				matrix[this.y][this.x] = 0;
				this.multiply = 0;

				for(var i in xotArr){
					if(x == xotArr[i].x && y == xotArr[i].y){
						xotArr.splice(i,1);
							this.energy++;
							this.xp--;
					}
				}
				
				this.y=y;
				this.x=x;
				
				
				
		}
		

	}

		

			
}
	
	


}

class antiantiGrass{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 1;
		this.multiply = 0;
		
		
	}


	newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}


	getDirections(t,b){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
				else if(matrix[y][x] == b){
					found.push(this.directions[i]);
				}
				
			}
		}
		return found;
	}


	eat(){


		this.multiply++;
		if(this.multiply == 2){
		var emptyCord = this.getDirections(2,0);

			var cord = random(emptyCord);
			
			if(cord){
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 3;
				matrix[this.y][this.x] = 0;
				this.multiply = 0;

				for(var i in antixot){
					if(x == antixot[i].x && y == antixot[i].y){
						antixot.splice(i,1);
						
					}
				}
			
				this.x=x;
				this.y=y;
				
				
		}
			this.multiply = 0;

	}
		

		
	
	}


}

class Bombes{
	constructor(x,y,ind){	
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 1;
		this.multiply = 0;
		
		
	}

	newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}


	getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}


	boom(){

		this.multiply++;
		if(this.multiply == 1	){
		var emptyCord = this.getDirections(2);

			var cord = random(emptyCord);
			
			if(cord){
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 0;
				matrix[this.y][this.x] = 0;
				this.multiply = 0;

				for(var i in antixot){
					if(x == antixot[i].x && y == antixot[i].y){
						antixot.splice(i,1);
						
					}
				}
				for(var i in bombs){
					if(x == bombs[i].x && y == bombs[i].y){
						bombs.splice(i,1);
						
					}
				}

			
				this.x=x;
				this.y=y;
				
				
		}
			this.multiply = 0;

	}
		


	}


}



