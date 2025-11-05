arr=[2,6,5,8,11]
target=14
// let firstelm=-1
// let secondelm=-1
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(target==arr[i]+arr[j]){
//             firstelm=arr[i]
//             secondelm=arr[j]
//             break
//         }
//     }
// }

// console.log(firstelm,secondelm)

//T.C O(n*N)  n power 2
//better approch

let map=new Map()
for(let i=0;i<arr.length;i++){
    map.set(arr[i],i)
}

console.log(map)
for(let i=0;i<arr.length;i++){
    findelm=target-arr[i]
    if(map.has(findelm)){
        index=map.get(findelm)
        console.log( [index,i],"index")//index
        console.log(findelm,arr[i],"element")
        break
    }
}

