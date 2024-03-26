

// Q )

// Given a number N, print reverse of number N.
// Input
// 988
// Output
// 889
// Note
// Do not print leading zeros in output.
// For example N = 100
// Reverse of N should be 1 not 001.
// Constraints
// 1<=N<=10000



function reverse(num) {


    let res = num.toString()

    res = res.split('')

    let final = parseInt(res.reverse().join(''))

    if (final < 1) {

        console.log(1)

    } else {

        console.log(final)
    }

}


reverse(988)