/*------- Siempre hambriento----- */
function siempreHambriento(arr) {
    for(var i=0; i<arr.length ; i++){
        if(arr[i] =="comida"){
            console.log("Delicioso");
        }
        if(arr[i] !="comida"){
            var sum = 1;
            sum = sum + i;
            if(sum == 5){
                console.log("Tengo hambre");
            }
        }   
    }   
return(arr);
}
//siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);

