arr=[1,2,4,7,7,5,3,6,7,7]

//brute force approch

// arr.sort()

// largest=arr[arr.length-1]
// second=arr[0]
// for(i=arr.length-2;i>=0;i--){
//     if(largest !=arr[i]){
//         second=arr[i]
//         break;
//     }
// }
// console.log(second,"second")
//T.c sorting=O(NlogN)+O(N-1)(in worst case)

for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            tem=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=tem
        }
    }
}
console.log(arr,"arr")

//Optimal approch

// second_largest=-1
// larget=arr[0]
// for(i=0;i<arr.length;i++){
//     if(second_largest<arr[i]){
//         if(larget>arr[i]){
//             second_largest=arr[i]
//         }else if(larget<arr[i]){
//             second_largest=larget
//             larget=arr[i]
//         }
//     }
// }
// console.log(second_largest,"dfsf")
let largest = Number.MIN_SAFE_INTEGER;
console.log(largest)

console.log(Math.max(...arr))
