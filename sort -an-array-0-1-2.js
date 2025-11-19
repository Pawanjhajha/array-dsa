let arr=[0,1,2,0,1,2,2,0,0,0,2]

// arr.sort((a,b)=>a-b)
// console.log(arr,"arr")
// T.C O(NlogN)

//better solution
let count_zero=0
let count_one=0
let count_two=0
for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        count_zero++
    }else if(arr[i]==1){
        count_one++
    }else if(arr[i]==2){
        count_two++
    }
}
console.log(count_one,count_two,count_zero)
let index=0

for (let i = 0; i < count_zero; i++) {
  arr[index++] = 0
}
for (let i = 0; i < count_one; i++) {
  arr[index++] = 1
}
for (let i = 0; i < count_two; i++) {
  arr[index++] = 2
}

console.log(arr, "arr")
