// function yellow(array) {
//    return  array.map(el => el * 2)
//
// }
// console.log(yellow([1,2,3,4,5]))


// function yellow(array) {
//    return array.map(el => el * el)
// }
// console.log(yellow([1,2,3,4,5]))


// function yellow(array) {
//     return array.map(el => el.length)
// }
// console.log(yellow(['lorem', 'ipsum', 'dolor' , 'sit']))


// function yellow(array) {
//    return array.map((el, idx) => idx +1)
// }
// console.log(yellow(['lorem', 'ipsum', 'dolor']))
//
// let array=['lorem', 'ipsum', 'dolor']
// console.log( array.map((el) => el[0].toUpperCase()+el.slice(1)+ el[1].toLowerCase().slice(1)))


// function yellow(array) {
//    return array.join('-').split(' ')
// }
//
// console.log(yellow( ['lorem', 'ipsum', 'dolor', 'sit', 'amet']))


// function yellow(array) {
//    return array.join('/').split(' ')
// }
//
// console.log(yellow(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))
//


// function yellow(array) {
//    return array.filter((el, idx) => idx % 2 ===0)
// }
//
// console.log(yellow(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))


// function yellow(array) {
//    return array.filter((el, idx) => idx % 2 !==0)
// }
//
// console.log(yellow(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))


// function yellow(array, array2) {
//
//    return [...array,...array2]
// }
//
// console.log(yellow(['lorem', 'ipsum', 'dolor', 'sit', 'amet'],['consectetur', 'adipiscing', 'elit']))


// function yellow(array) {
//    return  array.filter((item) => typeof item !== 'string');
//     return array.find((item) => typeof item === 'string')
//
//
// }
//
// console.log(yellow([123,33,444,'22',55,66,77,88,99]))

// let array =  [123,33,444,'22',55,66,77,88,99]
// function yellowF() {
//     let result = array.filter((item) => typeof item !== 'string');
//
//     console.log([...result])
// }
//
// yellowF()

// function yellow(array) {
//    return  array.filter((item) => typeof item !== 'string')
//
//
// }
//
// console.log(yellow([123,33,444,'22',55,66,77,88,99]))


// function yello(array) {
//    return array.filter((el,idx) => idx > 1)
// }
//
// console.log(yello(['null', undefined, 0, false, true, '']))


// function yellow(array) {
//     return  array = [...array,...array]
// }
//
// console.log(yellow([1123, 'qwe']))


// function yellow(array) {
//     return array = [...array,...array]
// }
//
// console.log(yellow([null, undefined]))



// function yellow(array) {
//     return array.filter((el) => el % 2 === 0).join(' ')
// }
//
// console.log(yellow('lorem', 'ipsum', 'dolor', 'sit', 'amet'))


// const sortArray = (array) => {
//     return array.sort(function(a,b) {
//     })
// }
//
// console.log(sortArray(['null', undefined, 0, false, true, '']))
//
// const yellowF = (array) => {array.filter(el => el.length % 2 !== 0)
//
// }
// console.log(yellowF('huuboipi hph p'))










//это примеры которые мы решали


// пример
// function yellowFunction(str) {
//     return str.split(' ').map((el)=> el.split('').reverse().join('')).join(' ')
//
// }
//
// console.log(yellowFunction( 'new word'))


// Пример
// function yellowFunction(str) {
//     return str.split('').map(el => {
//         if (el >= 5){
//             return 1
//         }else {
//             return 0
//         }
//     } ).join('')
// }
//
// console.log(yellowFunction('02132427886969'))


// Пример
// function yellowFunction(array) {
//     return array.map(el=>el >0 ? -1 : 1)
//
// }
//
// console.log(yellowFunction([-1.-2]))

// Пример

// function yellowFunction(array) {
//     let res = 0
//     array.map(el => res += el)
//     if(res % 2 === 0){
//         return 'even'
//     }else{
//         'odd'
//     }
// }
//
// console.log(yellowFunction([1, -1 , -4]))

//Пример
//  function yellowFunction(str,latter) {
//     let bb = 0
//          str.split('').map(el=> {
//          if (el == latter){
//             return bb += 1
//          }
//      } )
//      return bb
//  }
//
// console.log(yellowFunction('hello' , 'l'))


