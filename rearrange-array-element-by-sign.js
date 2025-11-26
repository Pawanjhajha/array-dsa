let arr=[3,1,-2,-5,2,-4] //ther is postive and negetive are equal

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

// let even=0 //event index
// let odd=1 //odd index
// let ans=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         //posositve
//         ans[even]=arr[i]
//         even=even+2
//     }else{
//         //negetive
//         ans[odd]=arr[i]
//         odd=odd+2
//     }
// }
// console.log(ans,"and")

let arr1=[-1,2,3,4,-3,1]
//use brute force since the postive and negetive are not equal there is two case 
//1.positive>negetive ,2.negetive>positive
let positive=[]
let negetive=[]
for(let i=0;i<arr1.length;i++){
    if(arr1[i]>0){
        positive.push(arr1[i])
    }else{
        negetive.push(arr1[i])
    }
}
console.log(positive,negetive)


let even=0
let odd=1
if(positive.length>negetive.length){
    for(let i=0;i<negetive.length;i++){
        arr1[even]=positive[i]
        arr1[odd]=negetive[i]
        even=even+2
        odd=odd+2
    }
    let index=negetive.length*2//from here to start
    for(let i=negetive.length;i<positive.length;i++){
        arr1[index]=positive[i]
        index++
    }
}else{
    for(let i=0;i<positive.length;i++){
        arr1[even]=positive[i]
        arr1[odd]=negetive[i]
        even=even+2
        odd=odd+2
    }
    let index=positive.length*2//from here to start
    for(let i=positive.length;i<negetive.length;i++){
        arr1[index]=negetive[i]
        index++
    }
}


console.log(arr1)