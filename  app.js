//alert("enter your name");

var array =[] ;
function info(){

var name =prompt("enter your name");
if(name == undefined)
{name= "invald";}






while(1){
    var age = prompt("inter your age");
if(age <= 0){
    alert(" the age is less than 0");
    continue;}
    else { 
        break;

    }
}




var gender =prompt("enter your gender");
 do{
    if(gender !== "male" && gender !== "female")
    {alert("you have to select between male or female");
prompt("enter your gender");}

 }while(false)






 var con = confirm("are you sure you want to skip");
if ( con == 0){
    switch (gender){
case "male" :
    alert("wellcome Mr."+name);
    break;
    case "female" :
        alert("wellcome Ms."
        +name);
        break;
        default:
            alert("wellcome"+name);
break;

}}
}
 info();

anserQustion();

function anserQustion (){
    
var benefit = prompt("are you find this page is useful");
if(benefit == undefined){
    benefit = "invald";}



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