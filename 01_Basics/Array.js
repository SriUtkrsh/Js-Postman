//let marks = Array(6)
var marks = [23,45,56,67,66,44,90]
// in Array index start from 0
console.log(marks[2]) //56  acces element
marks[5]=66  // assign value
console.log(marks) //[23,45,56,67,66,66,90]
console.log(marks.length) //7

marks.push(65) // Append elemet in last of Array
console.log(marks)
console.log(marks.length)//8

marks.pop()// delete Elemet from last tof aaray
console.log(marks)
console.log(marks.length)

marks.unshift(13) //add element at the begining of array
console.log(marks)

// get index of element

console.log(marks.lastIndexOf(13))

//validate Element present in Array or not
console.log(marks.includes(98))

//spliting Array into subarrays
SubArray =marks.slice(2,5)
console.log(SubArray) //[ 45, 56, 67 ]
