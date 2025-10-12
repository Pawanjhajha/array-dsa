//brute force 
const arr=[1,2,3,-3,1,1,1,4,2,-3]
// count=0
// k=3
// for(i=0;i<arr.length;i++){
//     for(j=i;j<arr.length;j++){
//         sum=0
//         for(q=i;q<=j;q++){
//             sum=sum+arr[q]
//         }
//         if(k==sum){
//             count++
//         }
//     }
// }
// time complexity= O(n*3)
// console.log(count,"count")

//Better approch
k=3
let count=0
for(i=0;i<arr.length;i++){
    sum=0
    for(j=i;j<arr.length;j++){
        sum=sum+arr[j]
        if(k==sum){
            count++
        }
    }
}
// time complexity= O(n*2)
console.log(count)