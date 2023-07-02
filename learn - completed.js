//console.log("hello world");

/********************************/

// let a = 10;
// let b = 9;
// b = 18;

// let c = a + b;
// //console.log(c);

// let str = "Wonderful World";
// //console.log(str);
// var g = 5;
// const h = 12;
// //h = 24;

// let value = str.includes("World");                                        //searches if string has words "World"

// //console.log(str.includes("World"));

// let d = 2;
// let e  = 4;
// let f = d + e;
// //console.log(f);

/***********************************/

/*function addIt(value1, value2) {
	console.log(value1 + value2);
}

addIt(a, b);
addIt(4, 5);
addIt(100 + 200);

function addReturn(value1, value2 = 5) {
	return value1 + value2;
}

let sum1 = addReturn(10, 20);                                                  //30
console.log(sum1);

let sum2 = addReturn(4);                                                                 //20
console.log(sum2);*/


/************************************************/

//let arr1 = [1,2,3,4];

// console.log(arr1[0]);
// console.log(arr1[3]);
//let arr2 = [2,1,3,5];

// if(arr1[0] <= arr2[0]) {
// 	console.log("arr1 first element is less than or equal to arr2 first element");
// }

// if(arr1[1] >= arr2[1]) {
// 	console.log("arr1 second element is greater than or equal to arr2 second element");
// }

// if(arr1[2] === arr2[2]) {
// 	console.log("arr1 third element is equal to arr2 third element");                                      //=== exactly equal to 
// }

// if(arr1[3] !== arr2[3]) {
// 	console.log("arr1 fourth element is not equal to arr2 fourth element");
// }

// let num1 = 5;
// let num2 = 8;

// if(num1 > 4 && num2 < 10) {
// 	console.log("We learned the and operation");
// }

// if(num1 < 4 || num2 < 10) {
// 	console.log("We learned the or operation");
// }


// if(!(num1 === 4)) {
// 	console.log("We learned the not operation");
// }

// if((num1 + num2) > 15) {
// 	console.log("When the if condition succeeds, don't go for else");
// } else {
// 	console.log("When the if condition fails, do else");
// }


/*if(arr1[0] === arr2[0]) {
	console.log("Position 0: They are equal");
}
if(arr1[1] === arr2[1]) {
	console.log("Position 1: They are equal");
}
if(arr1[2] === arr2[2]) {
	console.log("Position 2: They are equal");
}
if(arr1[3] === arr2[3]) {
	console.log("Position 3: They are equal");
}*/

/*for(let i = 0; i < arr1.length; i++) {
	//do something
	if(arr1[i] === arr2[i]) {
		console.log("Position " + i + ": They are equal");
	}
}

arr1.push(8);
console.log(arr1);
*/
/*****************************************************/

// let obj = {"name": "Neel", "age": "37", "job": "consultant", "hobby": "teaching"};
// let obj1 = {"name": "Mark", "age": "35", "job": "technician", "hobby": "yoga"};

// console.log(obj.name);
// console.log(obj1.name);

// //obj["country"] = "India";
// obj.country = "India";
// console.log(obj);


/***************************************/

window.onload = function(e) {                                   //when windows loads anything inside the function will load automatically
	let el1 = document.querySelector("#text");                   //text as an attribute  #- looking for an ID
	console.log(el1.innerHTML);                                     //print the inner html ("I am printing the text")             :fetching class
	let el2 = document.querySelector(".empty");                     // . means fetch me the element in  class empty into object e12
	el2.innerHTML = "Setting text via JS";                              // innerhtml prints the value on the website          :print data
	let value = el2.getAttribute("value");                                  //gets attribute of the "value present in HTML    :fetch data"
	console.log(value);
	let number = el2.dataset.getNumber;
	console.log(number);
}

window.click = function(e) {

}

/*let el1 = document.querySelector("#text");

This line retrieves an element with the ID "text" from the HTML document and assigns it to the variable el1. The # symbol indicates that we are looking for an element with the specified ID.
console.log(el1.innerHTML);

This line prints the inner HTML content of the element el1 to the console. In this case, it will print the text "I am printing the text" if that is the content of the element with the ID "text".
let el2 = document.querySelector(".empty");

This line selects an element with the class "empty" from the HTML document and assigns it to the variable el2. The . symbol denotes that we are searching for an element with the specified class.
el2.innerHTML = "Setting text via JS";

This line sets the inner HTML content of the element el2 to the string "Setting text via JS". This will replace any existing content inside the element with the class "empty".
let value = el2.getAttribute("value");

This line retrieves the value of the "value" attribute from the element el2 and assigns it to the variable value. The getAttribute method is used to fetch the value of a specific attribute.
console.log(value);

This line prints the value of the value variable to the console.
let number = el2.dataset.getNumber;

This line attempts to assign the value of the "getNumber" attribute in the data attribute of the element el2 to the variable number. However, it seems to be missing the function call parentheses (). It should be written as let number = el2.dataset.getNumber(); to correctly invoke the function associated with the getNumber attribute.
console.log(number);

This line prints the value of the number variable to the console.
To summarize, the value of the number variable is obtained by retrieving the value of the "getNumber" attribute from the data attribute of the element with the class "empty" in the HTML document. However, the code snippet provided is missing the function call for getNumber, so the value of number would not be set correctly unless the missing function call is added.*/