



// Q )


// Given an array of numbers, find the maximum and minimum element in the array.
// Input


// [54, 546, 548, 60]
// Output
// 548 54



// ans )

 let input=[54, 546, 548, 60]

function findmaximum(arrya) {

      
      let val=input[0]

      for(let x of arrya){

          if( val < x){

              val=x
          }
      }

      console.log("maximun :",val)


    }


    function findminum(arrya) {

      
        let val=input[0]
  
        for(let x of arrya){
  
            if( val > x){
  
                val=x
            }
        }
  
        console.log("minimum:",val)
  
  
      }


      findmaximum(input)

      findminum(input)


