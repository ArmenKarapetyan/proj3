var LivingCreature = require("./LivingCreature.js");

module.exports = class Bombes extends LivingCreature {


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