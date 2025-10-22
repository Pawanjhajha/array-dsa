arr=[1,2,3,4,5]
ele=arr[0]
for(let i=1;i<arr.length;i++){
    arr[i-1]=arr[i]
}
arr[arr.length-1]=ele
console.log(arr,"arr")

//s.c O(N)
//T.C = O(N-1)