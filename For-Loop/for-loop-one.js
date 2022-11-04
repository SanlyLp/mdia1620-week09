for(var i = 0; i<3; i++){
    console.log(i);
}
console.log("finished!");


var text = "";
var total = 0;
for (var i = 0; i < 6; i++ ){
    if(i==3){
        text = "finished";
        break;//stop everything
//this code does not make sense!! code stops after first if
    }else if (i == 5){
        i++
    }
    total += i;
}
console.log(text + " at the number "+ i + " with a totqal of "+ total);

