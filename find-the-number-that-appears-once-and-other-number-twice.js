arr=[1,1,2,3,3,4,4]

let elem=null
for(let i=0;i<arr.length;i++){
    let counter=0
    for(let j=0;j<arr.length;j++){
        if(arr[j]==arr[i]){
            counter++
        }
    }
    if(counter==1){
        elem=arr[i]
    }
}
console.log(elem)
//T.c O(N*N)