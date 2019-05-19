var LivingCreature = require("./LivingCreature.js");
var GrassEater = require("./GrassEater.js");

module.exports = class Bombes extends LivingCreature {


	boom(){

		this.multiply++;
		if(this.multiply == 1	){
		var emptyCord = this.chooseCell(0);

			var cord = Random(emptyCord);
			
			if(cord){
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 4;
				matrix[this.y][this.x] = 0;
				this.multiply = 0;

				for(var i in GrassEater){
					if(x == GrassEater[i].x && y == GrassEater[i].y){
						GrassEater.splice(i,1);
						
					}
				}
			

			
				this.x=x;
				this.y=y;
				
				
		}
			this.multiply = 0;

	}
		


	}



}