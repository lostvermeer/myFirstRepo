/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A) {
//     var small = 1;

//     A.sort();
//     for (i=0; i<A.length; i++) {
//         if (small == A[i])
//     }
    
//     return small;
    
// }
// function solution(A) { 
//     var small = 1; 
 
//     A.sort(function(a, b){return a - b}); 

//     for (i=0; i<A.length; i++) { 
//         small
//         if (A[i] > 0) { 
//             if(small == A[i])  {
//                 small++;
//             }
//             else if (small-1 == A[i]) {
//                 continue;
//             }
//             else {
//                 small
//                 return small;
//             }
//         }   
//     } 
//     return small;      
// }

// function solution(A) {
//     var A = new Set(A);
//     for (i=1;;i++) {
//         if (!A.has(i)) {
//             return i;
//         }
//     }

//     return 1;
// }

// function solution(A) {
//     A.sort();
//     var small = 1;
//     for (i=0;i < A.length;i++) {
//         if (A[i] - small > 1) {
//             return small+1;
//         }
//         if (A[i] > 0){
//             small = A[i];
//         }
//     }
//     return small;
// }

function solution(S) {
    let count = 0;
    let strLength = S.length;

    for (i=0; i <strLength ; i++) {
        if (S[0] == S[strLength-1]){
            count++;
        }
        const firstLetter = S.slice(0,1);
        let newstr = S.slice(1);
        newstr += firstLetter;
        S = newstr;
    }

    return count;
}

console.log(solution('abbaa'));