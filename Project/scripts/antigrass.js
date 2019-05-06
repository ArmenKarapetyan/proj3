class antiGrass extends LivingCreature {

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