arr=[2,6,5,8,11]
target=14
let firstelm=-1
let secondelm=-1
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(target==arr[i]+arr[j]){
            firstelm=arr[i]
            secondelm=arr[j]
            break
        }
    }
}

console.log(firstelm,secondelm)

//T.C O(n*N)  n power 2


