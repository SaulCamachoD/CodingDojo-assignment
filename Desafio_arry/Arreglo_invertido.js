function reverse(arr) {
    var s = arr.length ;
    for(var i=0; i<arr.length; i++){
        s--;
        var temp = arr[s];
        arr[i] = temp;
        console.log(temp);
    }
return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
//console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
