//function filterOutOdds() {
//    var nums = Array.prototype.slice.call(arguments);
//    return nums.filter(function(num) {
//      return num % 2 === 0
//    });
//  }
//function filterOutOdds(...nums){
// return nums.filter((sum,n)=>sum % 2 === n );
//};

//function filterOutOdds(...nums){
//    return nums.filter((sum)=>sum % 2 === 0 );
//   };

const filterOutOdds = (...nums) => { return nums.filter((sum)=>sum % 2 === 0 )};


//## **findMin**
//
//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//
//Make sure to do this using the rest and spread operator.
//findMin(1,4,12,-3) // -3
//findMin(1,-1) // -1
//findMin(3,1) // 1

//function findMin(...nums){
//    return nums.reduce((min,val) => val < min ? val : min);
//}

const findMin = (...nums) => {
    return nums.reduce((min,val) => val < min ? val : min);
}
//sol const findMin = (...args)=> Math.min(...args);


//## **mergeObjects**
//
//Write a function called ***mergeObjects*** that accepts two objects and returns
//a new object which contains all the keys and values of the first object and
//second object.
//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

//function mergeObjects(obj, ...vals){
//
//}
//onst arrayreturn =   (...obj1, ...obj2)
const mergeObjects = (obj1,obj2) => {
    return({...obj1,...obj2});
};


//## **doubleAndReturnArgs**
//
//Write a function called ***doubleAndReturnArgs*** which accepts an array and a
//variable number of arguments. The function should return a new array with the 
//original array values and all of additional arguments doubled.
//doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
//doubleAndReturnArgs([2],10,4) // [2, 20, 8]


//const doubleAndReturnArgs = (arr,...args)=>{
//  
//}
function doubleAndReturnArgs(arr,...args){
    return [...arr,...args.map(vals => vals *2)];
}

const doubleAndReturnArgs = (arr,...args) => {
     return [...arr,...args.map(vals => vals *2)];
}



//## **Slice and Dice!**
//
//For this section, write the following functions using rest, spread and refactor
//these functions to be arrow functions!
//
//Make sure that you are always returning a new array or object and not modifying
//the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

//function removeRandom(items) {
//  return [...arr, items.Math.random().pop()];
//}




/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
   return [...array1,array2];
}
const extend = (array1,array2)=>{
    return [...array1,array2];
}
/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj,[key]: val};
}
const addKeyVal = (obj, key, val) =>{
    return {...obj,[key]: val};
}

/** Return a new object with a key removed. */
//may need to come back to this
function removeKey(obj, key) {
    return {...obj,[key]: undefined};
}
const removeKey = (obj,key) =>{
    return {...obj,[key]: undefined};
}
//const removeKey = (obj,key) => {
//    let newObj = {...obj};
//    delete newObj[key];
//    return newObj;
//}
/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
 return {...obj1,...obj2};
}
const combine = (obj1,obj2) => {
    return {...obj1,...obj2};
}
combine({a:3, b:4},{c:1, d:5})

/** Return a new object with a modified key and value. */


const randomObj = {a:3, b:9}
function update(obj, key, val) {
 return {...obj,[key]: val}
}
//update(theobject, "a", 37);
//{a: 37, b: 1}