arr=[1,2,3,4,5,6,7]
//brute force approch
d=2
let tem=[]
d=d%arr.length
for(let i=0;i<d;i++){
    tem[i]=arr[i]
}
//t.c O(D)
for(let i=d;i<arr.length;i++){
    arr[i-d]=arr[i]
}
//t.c= O(N-D)
j=0
for(let i=arr.length-d;i<arr.length;i++){
    arr[i]=tem[j]
    j++
}
//t.c= O(N-d)
console.log(arr,"arr")
//t.c O(2D)+O(N-D)