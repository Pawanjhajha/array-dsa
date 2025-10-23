arr=[1,5,0,2,3,2,0,0,4,5,1]
// i=0
// count=0
// for(let j=0;j<arr.length;j++){
//     if(arr[j]==0){
//         count++
//         continue
//     }else if(arr[j]!=0 && i!=j){
//         arr[i]=arr[j]
//         i++
//     }
//     else{
//         i++
//     }
// }
// console.log(arr,"arr")
// for(let i=0;i<count;i++){
//     arr[arr.length-1-i]=0
// }
// console.log(arr,"arr")

// in worst case T.c => O(N*2)

//brute force approch
tem=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        tem.push(arr[i])
    }
}
for(let i=0;i<tem.length;i++){
    arr[i]=tem[i]
}
console.log(tem.length,"arr",arr)
for(let i=tem.length;i<arr.length;i++){
    arr[i]=0
}
console.log(arr,"arr")