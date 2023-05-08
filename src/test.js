let students =  [
    {name:"Mahesh", age:"10",dobYr:"2013"},
    {name:"Shivam", age:"25",dobYr:"1998"},
    {name:"Manish", age:"26",dobYr:"1997"},
    {name:"Preetam", age:"24",dobYr:"1999"},
    {name:"Saksham", age:"16",dobYr:"2007"},
]

let arr1 = [34,53,2,56,34,23,43,53,24,67];


// //console.log(arr1.sort());
// const sortedArr = arr1.sort((a,b)=>(b -a))
// console.log(sortedArr)
// let sumOfArry = arr1.reduce((a,b) => a+b, 10);
// console.log(sumOfArry);

let sortedStudent = students.sort((std1, std2)=> (std2.age  -std1.age))
console.log(sortedStudent);