arr=[1,2,2,3,1,5]
let sorted=true
for(i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        sorted=false
        break
    }
}

console.log(sorted,"sorted")