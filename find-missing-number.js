arr=[1,2,3,4]
 n=5
let missing=n
let counter=1
for(let i=0;i<arr.length;i++){
    if(arr[i]!=counter){
        missing=counter
    }else{
    counter++
    }
}
console.log(missing)
//T.c o(n-1)