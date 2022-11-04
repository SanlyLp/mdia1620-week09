var weather = ["sunny", "rainy", "cloudy"];
var words = "";

for (var i of weather){
    if(i == "cloudy"){
        words += i;
        break;
    }
    words += i + "\n";// what "\n" do?? -> shows everything in different lines
}
console.log(words);