// var get_name = document.getElementById("name");
let methods = {};
var name;
var counter = 0;
var dict = {};

// document.getElementById('name').addEventListener('keyup', function(event) {
//   	if (event.keyCode === 13) {
//   	   console.log("pressed enter!");
// 	   event.preventDefault();
// 	   document.getElementById("testing").innerHTML = "success!";
// 	   hello();
// 	}
// });

methods.hello = function(value) {
  name = value;
  return name;
}

methods.add = function(obj){
	dict[counter] = obj;
	counter += 1;
	return counter - 1;
}

methods.remove = function(index){
	var value = dict[index];
	delete dict[index];
	return value;
}

methods.contains = function(index){
	if (index in dict)
		return dict[index];
	return null;
}



module.exports = methods;
