//object
var person = {fname:"kenny", lname:"James", age:22};
var text = "";

for (var x in person){
    text += person[x] + " ";
}
console.log(person);
console.log(text);

var computer = {brand:"Microsoft", laptop:"Surface Laptop 4", screen: '13.5"'}// its 13.5 inches so we use single qote and " represents inch!
var sentence = " I have the: ";
for (var item in computer){
    if(item == "brand"){
        sentence += computer.brand;
    }else if (item == "laptop"){
        sentence += computer.laptop + " ";
    }else if(item == "screen"){
        sentence += computer.screen + ".";
    }

    if(item == "brand"){
        sentence += " ";
    }
}
console.log(sentence);

