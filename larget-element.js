arr=[3,2,1,5,2]

//brute force approch :- sort the array in accesnding order and give the last index element

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[j]>arr[j+1]){
//             tem=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=tem
//             console.log(arr)
//         }
//     }
// }
// result=arr[arr.length-1]
// console.log(arr,"result array ",result)

//deccending order

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j]<arr[j+1]){
            tem=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=tem
            console.log(arr)
        }
    }
}
result=arr[0]
console.log(arr,"result array ",result)

//T.c O(NlogN)