arr1=[1,2,2,3,3,4,5,6]
arr2=[2,3,3,5,6]
// secont=0
// result=[]
// for(let i=0;i<arr1.length;i++){
//     for(let j=secont;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             result.push(arr1[i])
//             secont++
//             break
//         }
//     }
// }
// console.log(result,"result")

//brute force approch
// vistedArray=new Array(arr2.length).fill(0)
// result=[]
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]&&vistedArray[j]==0){
//             result.push(arr1[i])
//             vistedArray[j]=1
//             break
//         }
//         if(arr1[i]<arr2[j]) break
//     }
// }
// console.log(result)
//T.c O(n*M)

//Optimal approch
let result=[]
let i=0
let j=0
while(i<arr1.length&&j<arr2.length){
    if(arr1[i]<arr2[j]){
        i++
    }else if(arr1[i]>arr2[j]){
        j++
    }else{
        result.push(arr1[i])
        i++
        j++
    }
}
console.log(result)
//t.C O(n+M)

