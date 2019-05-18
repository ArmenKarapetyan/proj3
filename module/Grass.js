var LivingCreature = require("./LivingCreature.js");

module.exports = class Grass extends LivingCreature {


	mul(){
		this.multiply++;
		if(this.multiply == 3){
			var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);
			
			if(cord){
				var x = cord[0];
				var y = cord[1];
				this.multiply = 0;

				var GrassArr = new Grass(x,y,this.index);
				GrassArr.push(Grass);

				matrix[y][x] = 1;
				
			}
			this.multiply = 0;
		}
	}

	

}