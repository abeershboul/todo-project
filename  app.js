//alert("enter your name");
var name =prompt("enter your name");


var age = prompt("inter your age");
if(age <= 0){
    alert(" the age is less than 0");
}


var gender =prompt("enter your gender");

switch (gender)
{
    case "male" :
        alert("your gender is male");
        break;
        case 'female' :
        alert("your gender is female");
        break;
        default :
        alert("you mast inter male or female");
        break;
}
confirm("are you sure you want to skip");

if( gender !== "male" && gender !=="female"){
    alert("wellcom");
    alert(name);
}
if(gender === "male"){
    alert("wellcom Mr.");
    alert( name);
}
if(gender ==="female"){
    alert("wellcome Ms.");
    alert(name);
}
anserQustion();
function anserQustion (){
    var array =[] ;
var benefit = prompt("are you find this page is useful");
if(benefit == undefined)
    benefit = "invald";



var desgin = prompt("Are you find the style of this page is nice" );
if(desgin == undefined)
{ desgin = "invald";}

var student = prompt("are you studant");
if(student  == undefined){
    student = "invald";
}
array.push(benefit);
array.push(desgin);
array.push(student);
for( let i = 0; i<array.length;i++){
    console.log(array[i]);

}




}