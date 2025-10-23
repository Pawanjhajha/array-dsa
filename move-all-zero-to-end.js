arr=[1,0,2,3,2,0,0,4,5,1]
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
// tem=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=0){
//         tem.push(arr[i])
//     }
// }
// for(let i=0;i<tem.length;i++){
//     arr[i]=tem[i]
// }
// console.log(tem.length,"arr",arr)
// for(let i=tem.length;i<arr.length;i++){
//     arr[i]=0
// }
// console.log(arr,"arr")

// T.C O(x)+O(X)+O(N-X) =>O(N)+O(X)

//Optimal approch
//check the zero
let j
let i
for(i=0;i<arr.length;i++){
    if(arr[i]==0){
        j=i
        break
    }
}
if(j==arr.length-1){

}else{


for(i=i+1;i<arr.length;i++){
    if(arr[i]!=0){
        tem=arr[j]
        arr[j]=arr[i]
        arr[i]=tem
        j++
    }
}
}
console.log(arr,"arr")
//T.C =>O(N)