let arr=[3,1,-2,-5,2,-4]

//answer=[3,1,-2,-5,2,-4]
//brute force approch
// let positive=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         positive.push(arr[i])
//     }
// }
// let negetive=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         negetive.push(arr[i])
//     }
// }
// console.log(positive,negetive)
// let i=0,j=0
// for(let k=0;k<arr.length;k++){
//     if(i==j){
//         arr[k]=positive[i]
//         i++
//     }else if(j<i){
//         arr[k]=negetive[j]
//         j++
//     }else{
//         arr[k]=positive[i]
//         i++
//     }
// }
// console.log(arr,"arr")

//t.c O(n)+O(n)+O(n)=O(3n)

let even=0
let odd=1
let ans=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        //posositve
        ans[even]=arr[i]
        even=even+2
    }else{
        //negetive
        ans[odd]=arr[i]
        odd=odd+2
    }
}
console.log(ans,"and")