//const arr = [5,6,7,8,14,10,200,0,3,5,1,2,1,4,3,9]

// let place = 3;
// for (let i=arr.length; i>=0; i--){
//     if(i >= place){
//         arr[i] = arr[i-1]
//         if(i === place){
//             arr[i]=value
//         }
//     }
// }
// console.log(arr)
// for (let i=place; i<arr.length; i++){
//     arr[i] = arr[i+1]
// }
// arr.length = arr.length-1
// console.log(arr)
// for (let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(arr[j] < arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1]= temp
//         }
//     }
// }
// console.log(arr)


// let stack = []
// let currentLength = 0;
// let maxLEngth = 8;

// const push = (value)=>{
//     if(currentLength <= maxLEngth){
//         stack[currentLength] = value
//         currentLength += 1
//     }
    
// }

// push(30);
// push(3);
// push(38);
// push(14);
// pop()
// push(100)
// console.log(stack)

// function pop(){
//     if(stack.length > 0){
//         stack.length = stack.length-1
//         currentLength -= 1
//     }
// }

// let arr1 = [1,3,4,6,9,8];
// let position = 0
// let missingNo = [];
// for (let i=1; i<10; i++){
//     if(arr1.indexOf(i) < 0){
//         missingNo[position] = i
//         position +=1
//     }
// }
// console.log(missingNo)

let oddArr = [5,7,9,15];
//result = 11
let position=0;
let missingNo = [];
for (let i=5; i<=15; i++){
    if( i%2 === 1 ){
        if(oddArr.indexOf(i) < 0){
            missingNo[position] = i
            position += 1
        }
    }
}
console.log(missingNo);





































