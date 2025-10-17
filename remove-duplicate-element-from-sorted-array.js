arr=[1,1,2,2,2,3]
// ans=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=arr[i+1]){
//         ans.push(arr[i])
//     }
// }
// console.log(ans,"ans")
//t.c= O(N)

//brute force approch
let s=new Set()
for(let i=0;i<arr.length;i++){
    s.add(arr[i])
}
//t.c O(NlogN)
console.log(s,"s.....") 
// itrate the set 
index=0
for(let item of s){
    arr[index]=item
    index++
}
console.log(index,arr)

//t.c O(NlogN)+O(n)