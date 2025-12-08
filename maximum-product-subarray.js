// let arr=[2,3,-2,4]
let arr=[-2,3,4,-1,0,-2,3,1,4,0,4,6,-1,4]
//use prefix sum and sufix sum

let prefix=1
let sufix=1
maximum=0
for(let i=0;i<arr.length;i++){
    if(prefix==0){
        prefix=1//restart sum
    }
    if (sufix==0){
        sufix=1
    }
    prefix=prefix*arr[i]
    sufix=sufix*arr[arr.length-i-1]
    maximum=Math.max(maximum,Math.max(prefix,sufix))
}
console.log(maximum,"maximum")