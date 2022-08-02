//alert("enter your name");

var array =[] ;
function addName(){

var name =prompt("enter your name");
if(name == undefined)
{name= "invald";}
array.push(name);
}
function addAge()
{

var age = prompt("inter your age");
if(age == undefined)
{age= "invald";}
array.push(age);
if(age <= 0){
    alert(" the age is less than 0");
}
}
function addGender(){
var gender =prompt("enter your gender");
if(gender == undefined)
{gender= "invald";}
array.push(gender);
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
}
function conf(){
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
}
addName();
addAge();
addGender();
anserQustion();
function anserQustion (){
    
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