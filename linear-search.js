arr=[6,7,8,4,1]
num =4
let i=-1
for(i=0;i<arr.length;i++){
    if(num==arr[i]){
        i= i;
        break
    }
}
console.log(i,"index")
//T.C => O(N)