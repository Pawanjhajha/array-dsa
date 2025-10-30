arr=[1,1,0,1,1,1,0,1,1]
maximum=0
counter=0
for(let i=0;i<arr.length;i++){
    if(arr[i]==1){
        counter++
        if(maximum<counter){
            maximum=counter
        }
    }else{
        counter=0
    }
}
console.log(maximum,"maximu")
//t.c O(N)