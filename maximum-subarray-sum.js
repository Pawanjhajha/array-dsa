let arr=[-2,-3,4,-1,-2,1,5,-3]
// maximu=0
// for(let i=0;i<arr.length;i++){
//     sum=0
//     for(let j=i;j<arr.length;j++){
//         sum=sum+arr[j]
//         maximu=Math.max(sum,maximu)
//     }
//     sum=0
// }
// console.log(maximu)

//T.C O(n*N)

maximum=Number.MIN_VALUE //take minum value
sum=0
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
    if(sum<0){
        sum=0
    }
    if(maximum<sum){
        maximum=sum
    }
}
console.log(maximum,"maximum")

