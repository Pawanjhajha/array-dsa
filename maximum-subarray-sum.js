let arr=[-2,-3,4,-1,-2,2,5,-3]
maximu=0
for(let i=0;i<arr.length;i++){
    sum=0
    for(let j=i;j<arr.length;j++){
        sum=sum+arr[j]
        maximu=Math.max(sum,maximu)
    }
    sum=0
}
console.log(maximu)

//T.C O(n*N)


