// Write a function called 'getName' which takes a single object argument and
// returns the value of the 'name' property of the given object.

var nombre = { name: 'Luisa', age: 25};

var getName = function(hola) {
  console.log(hola.name);

};
getName(nombre);

// Write a function called 'totalLetters' which takes an array of strings and
// returns the total number of letters in all strings.

var totalLetters1 = ['javascript', 'is', 'awesome'];
var totalLetters2 = ['what', 'happened', 'to', 'my', 'function'];

var totalLetters = function(numero) {
  console.log(totalLetters1.join('').length);
  console.log(totalLetters2.join('').length);

};
totalLetters(totalLetters1);
totalLetters(totalLetters2);

// Write a function called 'keyValue' which takes two arguments and returns a new
// object with a key of the first argument and the value of the second argument.

keyValue('city', 'Denver');

function keyValue(key,value){
  var object = {};
    object[key] = value;
  console.log(object);
}

// Write a function called 'negativeIndex' which takes an array and a negative
// number, and returns the value from the array at the given negative index, as
// if the array was circular, i.e. arr.length+num.


negativeIndex(['a', 'b', 'c', 'd', 'e'], -2);
negativeIndex(['jerry', 'sarah', 'sally'], -1);

function negativeIndex(array, number){
  var value;
  value = array[array.length + number];
  console.log(value);
}

// Write a function called 'removeM' which takes a single string argument and
// removes all 'm' characters from the string. The function won't actually modify

removeM('family');
removeM('memory');

function removeM(someLetter){
  console.log(someLetter.split('m').join(''));
}

// Write a function called 'printObject' which takes a single object argument and
// console.log's each key-value pair in the format key is value on separate lines.

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });

function printObject(data){
  for(var key in data){
    console.log(key + ' is ' + data[key] );
  }
}


// Write a function called 'vowels' which takes a string and returns an array of
// all the vowels in the string, including duplicates.

vowels('alabama');
vowels('What evil odd ducks!');

function vowels(string){
  var vowel = [];
  var phrase = string.split(''); /*.toLowerCase().split(''); provides a cleaner output */
  phrase.map(function(index){
    if (index === 'a' || index === 'e' || index === 'i' || index === 'o' || index == 'u') {
      vowel.push(index);
    }
  });
console.log(vowel);
}

// Write a function called 'twins' which takes an array and returns true if every
// adjacent pair of items in the array is the same.

var twins = function(array){
  if(array.length %2 !== 0){
    return false;
  }
  for(var i=0; i<array.length; i+=2){
    if(array[i] !== array[i+1]){
      return false;
    }
  }
  return true;
};
console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', undefined]));

// Write a function called 'or' which takes an array of booleans and returns true
// if any one of them is true. Given an empty array, return false. If you find an
// item that is true, the function should return true immediately and not continue
// checking further values.

var or = function(verdad){
  for(var i=0; i<verdad.length; i++){
    if(verdad[i] === true){
      return true;
    }
  }
  return false;
};
console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));

// Write a function called 'unique' which takes an array of strings, and returns
// a new array consisting of the unique values (no duplicates).

unique(['a', 'b', 'a', 'c', 'd', 'd']);
unique(['todd', 'avery', 'maria', 'avery']);

function unique(strings){
	uniqueArray = strings.filter(function(x, y) {
		//console.log(strings.indexOf(x), y);
		return strings.indexOf(x) === y;
	});
	console.log(uniqueArray);
}
