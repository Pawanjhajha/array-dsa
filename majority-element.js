let arr=[2,2,3,3,1,2,2]
let map=new Map()
for(let i=0;i<arr.length;i++){
    map.set(arr[i],(map.get(arr[i])||0)+1)
}
console.log(map,"map")
let N=arr.length
for(let [key,value] of map){
    if(map.get(key)>(N/2)){
        console.log(key,"majority element")
    }
}