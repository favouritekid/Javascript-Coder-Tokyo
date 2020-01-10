var fs = require('fs');
function animal (name,paw,fang) {
	this.name = name;
	this.paw = paw;
	this.fang = fang;
	this.eat = [];
}
animal.prototype.eating = function(food){
	this.eat.push(food);
};
function animalFood(name,types){
	this.name = name;
	this.types = types;
}
function readFilePromise(path){
	return new Promise(function (resolve, reject) {
		fs.readFile(path,'utf8',function(err,data){
			if(err){
				reject(err);
			}else {
				resolve(JSON.parse(data));
			}
		});
	});
}
var animals = [];
var animalFoods = [];
readFilePromise('animal.json')
	.then(function (object) {
		for(let i of object)
		{
			var _animal = new animal(i.name,i.paw,i.fang);
			animals.push(_animal);
		}
		return animals;
	}).then(function (object) {
		console.log(object);
		return readFilePromise('animalFood.json');
	}).then(function(object){
		console.log(object);
		for(let i of object){
			var _animalFood = new animalFood(i.name,i.types);
			for(let j of animals){
				if(j.fang ===true && i.name ==='meat'){j.eating(i.types); console.log(j.name +' eating '+ j.eat);}
				if(j.fang ===false && i.name ==='vegetable'){j.eating(i.types);console.log(j.name +' eating ' +j.eat);}
			}
		}
	})
	.catch(function(err){
		console.log(err);
	});