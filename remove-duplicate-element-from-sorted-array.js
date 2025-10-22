// arr=[1,1,2,2,2,3]
// ans=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=arr[i+1]){
//         ans.push(arr[i])
//     }
// }
// console.log(ans,"ans")
//t.c= O(N)

//brute force approch
// let s=new Set()
// for(let i=0;i<arr.length;i++){
//     s.add(arr[i])
// }
// //t.c O(NlogN)
// console.log(s,"s.....") 
// // itrate the set 
// index=0
// for(let item of s){
//     arr[index]=item
//     index++
// }
// console.log(index,arr)

//t.c O(NlogN)+O(n)

//Optimal approch
arr=[1,1,2,2,2,3]
let i=0//frist unique element is that 
for(j=1;j<arr.length;j++){
    if(arr[i]!=arr[j]){
        arr[i+1]=arr[j]
        i++
    }
}
i++//now i denote the length of the array
console.log(i,"index",arr)

//t.c O(N-1)
//enable debugger in in the vs code Ctrl + Shift + D
//s.c= O(1)   
