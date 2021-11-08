const loggerobj = require('./logger')
const helperobj = require('./util/helper')
const formatterobj = require('../validator/formatter')
const obj = require('underscore')
const obj1 = require('lodash')


loggerobj.logname()
loggerobj.welcome()
console.log('this is url ' + loggerobj.url)
console.log("-------------------")

helperobj.printDate()
helperobj.printMonth()
helperobj.getBatchIndo()
console.log("---------------")

formatterobj.trim()
formatterobj.lowerCase()
formatterobj.upperCase()
console.log("-------------")



console.log(obj.first([12,15,13]))
console.log(obj.last(["vaibhav","prachi","neha","rahul","pawan"]))
console.log(obj.rest(["vaibhav","prachi","neha","rahul","pawan"] , 3))
console.log("---------------")


/*Using the package ‘lodash’ solve below probolems

Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function
Using the tail function, return the last n-1 elements of an array containing the first 10 odd numbers
Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values
Use the function fromPairs to create a object contating key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]*/


console.log(obj1.chunk(["janurary","faburary","march","april","may", "june"," july", "august","sept","oct", "nov", "dec"] , 3))
console.log(obj1.tail([1,3,5,7,9,11,13,15,17,19], 10))
console.log(obj1.union([2,5,4],[2,5,7],[2,4,6,8,9],[64,24,12,1,1],[1, 2, 3, 4,]))
console.log(obj1.fromPairs([["firstName", "vaibhav"], ["surName", "devkar"]]));
