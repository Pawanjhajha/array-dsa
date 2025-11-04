arr=[1,2,3,1,1,1,1,4,2,3]

//brute force approch
longest=0
k=3

// for(let i=0;i<arr.length;i++){
//     sum=0
//     for(let j=i;j<arr.length;j++){
//         for(k=i;k<=j;k++){
//             sum=sum+arr[j]
//             if(sum==k){
//                 longest=Math.max(longest,(j-i)+1)
//                 break
//             }
//         }
//     }
// }
// console.log(longest,"longest")  
//T.C = O(n*n*n) nPower3

//better approch
for(let i=0;i<arr.length;i++){
    sum=0
    for(let j=i;j<arr.length;j++){
       sum=sum+arr[j]
       if(sum==k){
        longest=Math.max(longest,(j-i)+1)
       }
    }
}
console.log(longest,"longest") 