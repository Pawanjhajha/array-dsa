arr1=[1,1,2,3,4,5]
arr2=[2,3,4,4,5,6]

//brute force approch
// s=new Set()
// for(let i=0;i<arr1.length;i++){
//     s.add(arr1[i])
// }
// for(let i=0;i<arr2.length;i++){
//     s.add(arr2[i])
// }
// console.log(s,"s")
//T.C O(2N)

//optimal approch
let i=0
let j=0
let union=[]
//two pointer approch
while(i<arr1.length && j<arr2.length){
    if(arr1[i]==arr2[j]){
        // Add only if result is empty or last element is different because array is sorted
        if(union.length ==0  || union[union.length-1] !== arr[i]){
            union.push(arr1[i])
        }
        j++
        i++
    } else if (arr1[i] < arr2[j]) {
        if (res.length === 0 || res[res.length - 1] !== arr1[i]) {
            res.push(arr1[i]);
        }
        i++;
    } 
    else {
        if (res.length === 0 || res[res.length - 1] !== arr2[j]) {
            res.push(arr2[j]);
        }
        j++;
    }
}
while (i < arr1.length) {
    if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
    i++;
}
while (j < arr2.length) {
    if (res[res.length - 1] !== arr2[j]) res.push(arr2[j]);
    j++;
}