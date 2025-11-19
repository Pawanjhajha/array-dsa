let arr=[2,2,3,3,1,2,2]

//brute force approch
let N=arr.length
for(let i=0;i<arr.length;i++){
    let counter=0
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            counter++
        }
    }
    if(counter>(N/2)){ console.log(arr[i],"majority element")
        break
    }
}

//T.c O(N)

// let map=new Map()
// for(let i=0;i<arr.length;i++){
//     map.set(arr[i],(map.get(arr[i])||0)+1)
// }
// console.log(map,"map")
// let N=arr.length
// for(let [key,value] of map){
//     if(map.get(key)>(N/2)){
//         console.log(key,"majority element")
//     }
// }
//t.C O(N)+O(N) =O(2N)