/* -------Mejor que el promedio-------*/
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0;i<arr.length; i++){// calcula el promedio
        sum = sum + arr[i];
    }
    sum/=arr.length;
    var count = 0
    for(var i=0; i<arr.length;i++){
        if(arr[i]>sum){
            count += 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
