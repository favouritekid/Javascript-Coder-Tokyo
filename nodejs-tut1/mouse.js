 function Mouse (name, color, weight){
 	this.type = 'Mouse';
 	this.name = name;
 	this.color = color;
 	this.weight = weight;
 	this.live = true;
 }
 Mouse.prototype.die = function(){
 	this.live = false;
 };
 module.exports = Mouse;