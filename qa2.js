




function primenumber(num) {

    let flage=''

    for (let i = 2; i <=10; i++) {

        if (num != i) {
            
            let res = num % i

            if (res === 0) {

              return  flage = "no"
            
            } else {

               return flage = "yes"
               

            }
        }
    }

 

}


console.log(primenumber(3))