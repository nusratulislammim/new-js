const myArr = []
// %DebugPrint(myArr)

// continious, Holey
//SMI(small integer)
//Double (float, string, function)

const arrTwo = [1,2,3,4,5]
//PACKED_SMI_ELEMENTS

arrTwo.push(4.0)
//PACKED_DOUBLE_ELEMENTS

arrTwo.push('3')
//PACKED_ELEMENTS

arrTwo[10] = 11
//HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo,9)
// hasOwnProperty(arrTwo.prototype,10)
// hasOwnProperty(arrTwo.prototype,10)

//holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

//smi>double>packed
//h_smi>h_double>h_packed

const arrFour = new Array(3)
arrFour[0] = '1'
arrFour[1] = '2'
arrFour[2] = '3'

const arrFive = []
arrFive.push('1')
arrFive.push('2')
arrFive.push('3')


const arrSix = [1,2,3,4,5]

arrSix.push(Infinity)

//for, for-of, forEach