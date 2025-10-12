
//brute force approch
// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//   ];
  
//   let n = arr.length;       // number of rows
//   let m = arr[0].length;    // number of columns
  
//   // Initialize rotated array
//   let ans = [];
//   for (let i = 0; i < m; i++) {
//     ans[i] = new Array(n); // create empty row
//   }
  
//   // Rotate 90° clockwise
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       ans[j][n - 1 - i] = arr[i][j];
//     }
//   }
  
//   console.log(ans);


/* Optimal approch */

let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let n=arr.length;
let m=arr[0].length
//tranpose the metrix
for(i=0;i<=n-2;i++){
    for(j=i+1;j<m;j++){
        let temp = arr[i][j];
arr[i][j] = arr[j][i];
arr[j][i] = temp;
    }
}

for(i=0;i<n;i++){
    arr[i].reverse()
}
