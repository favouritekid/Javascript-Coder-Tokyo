function Cat (name, color, weight){
 	this.type ='Cat';
 	this.name = name;
 	this.color = color;
 	this.weight = weight;
 	this.stomach = [];
 }
 Cat.prototype.eat = function(mouse){
 	this.stomach.push(mouse);
 	this.weight +=mouse.weight;
 	mouse.die();
 	return this;
 };
 module.exports = Cat;