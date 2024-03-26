

// Q )

// Given an array of numbers, arrange them in a way that it forms the largest value.

// Input
// [54, 546, 548, 60]

// Output
// 6054854654



function arrange (){

let arrya=[54, 546, 548, 60]

let newarry=[]

  for(let i=arrya.length-1;i>=0;i--){

           newarry.push(arrya[i])
  }
    console.log(newarry.join(''))

      
}

arrange()