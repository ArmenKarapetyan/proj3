var LivingCreature = require("./LivingCreature.js");
var GrassEater = require("./GrassEater.js");

module.exports = class antiantiGrass extends LivingCreature {

	constructor(x, y, index, energy, xp){
        super(x, y, index, energy, xp);
		this.energy = 3;
		this.xp = 8;
    }


	mul(){
		if(this.energy == 5){
			var emptyCord = this.chooseCell(0);

			var cord = Random(emptyCord);
			
			if(cord){
				var x = cord[0];
				var y = cord[1];
				this.energy == 0;

				var PredatorArr = new Predator(x,y,this.index);
				GrassEater.push(PredatorArr);

				matrix[y][x] = 2;
				
			}
			this.energy = 0;
		}
	}	






		
	eat(){


		this.multiply++;
		if(this.multiply == 2){
		var emptyCord = this.chooseCell(2);

			var cord = Random(emptyCord);
			
			if(cord){
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 3;
				matrix[this.y][this.x] = 0;
				this.multiply = 0;

				for(var i in GrassEater){
					if(x == GrassEater[i].x && y == GrassEater[i].y){
						GrassEater.splice(i,1);
						this.energy++;
							this.xp--;
					}
				}
			
				this.x=x;
				this.y=y;
				
				
		}
			this.multiply = 0;

	}
		

		
	
	}
	
	

}