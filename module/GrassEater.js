var LivingCreature = require("./LivingCreature.js");
var Grass = require("./Grass.js");

module.exports = class GrassEater extends LivingCreature{

	constructor(x, y, index){
        super(x, y, index);
        this.energy = 3;
    }



	mul(){
		if(this.energy == 6){
			var emptyCord = this.chooseCell(0);

			var cord = random(emptyCord);
			
			if(cord){
				var x = cord[0];
				var y = cord[1];
				this.energy == 0;

				var GrassEaterArr = new GrassEater(x,y,this.index);
				GrassEater.push(GrassEaterArr);

				matrix[y][x] = 2;
				
			}
			this.energy = 0;
		}
	}	

	eat(){
		this.multiply++;
		
		if(this.multiply == 3){
		var emptyCord = this.chooseCell(1);

			var cord = Random(emptyCord);
			
			if(cord){
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 2;
				matrix[this.y][this.x] = 0;
				this.multiply = 0;

				for(var i in Grass){
					if(x == Grass[i].x && y == Grass[i].y){
						Grass.splice(i,1);
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


