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

while(1){
if(age <= 0){
    alert(" the age is less than 0");
    continue;}
    else { 
        break;

    }
}
array.push(age);
}

function addGender(){
var gender =prompt("enter your gender");
 do{
    if(gender !== "male" && gender !== "female")
    {alert("you have to select between male or female");
prompt("enter your gender");}

 }while(false)



array.push(gender);
}
function conf(){
 var con = confirm("are you sure you want to skip");
if ( con == 1){
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
}}
addName();
addAge();
addGender();
conf();
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