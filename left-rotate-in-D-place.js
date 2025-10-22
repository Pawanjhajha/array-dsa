// arr=[1,2,3,4,5,6,7]
//brute force approch
// d=2
// let tem=[]
// d=d%arr.length
// for(let i=0;i<d;i++){
//     tem[i]=arr[i]
// }
// //t.c O(D)
// for(let i=d;i<arr.length;i++){
//     arr[i-d]=arr[i]
// }
// //t.c= O(N-D)
// j=0
// for(let i=arr.length-d;i<arr.length;i++){
//     arr[i]=tem[j]
//     j++
// }
// //t.c= O(N-d)
// console.log(arr,"arr")
// //t.c O(2D)+O(N-D)

//optimal approch
arr=[1,2,3,4,5,6,7]
d=3
//two pointer approch
j=d-1
for(i=0;i<j;i++){
    tem=arr[i]
    arr[i]=arr[j]
    arr[j]=tem
    j--
}
// console.log(arr,"arr")
//t.c O(D)
j=arr.length-1
for(i=d;i<j;i++){
    tem=arr[i]
    arr[i]=arr[j]
    arr[j]=tem
    j--
}
// console.log(arr,"arr")
//T.C = O(N-D)
j=arr.length-1
for(let i=0;i<j;i++){
    tem=arr[i]
    arr[i]=arr[j]
    arr[j]=tem
    j--
}
//T.C O(N)
console.log(arr,"arr")

//Total T.C =O(D)+O(N-D)+O(N)=> O(2N)