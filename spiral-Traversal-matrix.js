let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
let top=0
let left=0
let right=arr.length-1
let bottom=arr[0].length-1

//right-bottom-left-top

//step 1:-right
ans=[]

while(left<=right && top<=bottom){
for(i=left;i<=right;i++){
    ans.push(arr[top][i])
}
top++
//step 2:-bottom

for(i=top;i<=bottom;i++){
    ans.push(arr[i][bottom])
}
right--

//step 3:-left
for(i=right;i>=left;i--){
    ans.push(arr[bottom][i])
}
bottom--


//step 4:- top
for(i=bottom;i>=top;i--){
    ans.push(arr[i][left])
}
left++
}

