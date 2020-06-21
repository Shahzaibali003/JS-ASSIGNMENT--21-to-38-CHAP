//CHAPTER 21-25
//TASK 1
// var first=prompt("Enter you first name");
// var last=prompt("Enter your last name");
// var fullname=first+" "+last
// alert("Welcome"+" "+fullname);

//TASK 2

// var phone=prompt("Enter your favourite phone name")
// var n=phone.length;
// document.write("My favourite phone is: "+phone+"<br>"+"Length of string: "+n);

//TASK 3
// var str="Pakistani";
// var n=str.indexOf("n");
// document.write("String: "+str+"<br>"+"Index of n : "+n);

//TASK 4

// var str="Hello World";
// var n=str.lastIndexOf("l");
// document.write("String: "+str+"<br>"+"Last index of l : "+n);

//TASK 5

// var str="Pakistani";
// var n=str.charAt(3);
// document.write("String: "+str+"<br>"+"Character at index 3 : "+n);

//TASK 6

// var first=prompt("Enter you first name");
// var last=prompt("Enter your last name");
// var res=first.concat(" ",last);
// alert("Welcome "+res);

//TASK 7
// var str1="Hyderabad";
// var n=str1.replace("Hyder","Islam");
// document.write("City: "+str1+"<br>"+"After replacement : "+n);

//TASK 8

// var str1="Ali and Sami are best friends. They play cricket and football together.";
// var n=str1.replaceAll("and","&");
// document.write("Message: "+str1+"<br>"+"After replacement : "+n);

//TASK 9

// var str="472";
// var str2=parseInt(str);
// document.write("Value: "+str+"<br>"+"Type: "+typeof(str)+"<br>"+"Value: "+str2+"<br>"+"Type: "+typeof(str2));

//TASK 10
// var str=prompt("Insert String:");
// var res=str.toUpperCase();
// document.write("User input: "+str+"<br>"+"Upper Case: "+res);

//TASK 11

// function Titlecase(){
//     var str=prompt("Enter String: ")
//     var words=str.toLowerCase().split(" ");
//     for (var i=0; i<words.length; i++){
//         words[i]=words[i][0].toUpperCase()+words[i].slice(1);
//     }
//     document.write(words.join(" "));

// }

//TASK 12

// var str=35.36;
// var str2= str.toString().replace(".", "")
// document.write("Number: "+str+"<br>"+"Result: "+str2);


//TASK 13

// var username=prompt("Enter Username: ");

// for (var i=0 ; i <username.length ; i++){
//     if (username[i] == "!" || username[i]=="." || username[i]=="@" || username[i]==","){
//         alert("Please enter a valid username");    
//     }
// }

//TASK 14
// var arr=["cake","apple pie","cookie","chips", "patties"]
// var search=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// var res=search.toLowerCase();
// for(var i=0 ; i < arr.length ; i++){
//     if (arr[i]===res){
//         alert(arr[i]+" is available at index "+arr.indexOf(arr[i])+" in our bakery")
    
//     }

// }


//TASK 16
// var str="University of Karachi";
// var res=str.split("<br>")
// document.write(res)

//TASK 17 
// var user=prompt("Enter input")
// var n=user.charAt(user.length-1)
// document.write("User input: "+user+"<br>"+"Last charcter of input: "+n);

//TASK 18
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write("Text: "+"the quick brown fox jumps over the lazy dog"+"<br>"+"There are "+char_count ("the quick brown fox jumps over the lazy dog", "the")+" occurences of word the");


//CHAPTER 26-30

//TASK 1
// var user=+prompt("Enter Value");
// //a,b,c,d
// document.write("number: "+user+"<br>"+
// "round off value: "+Math.round(user) +"<br>"+" floor value: "+Math.floor(user) +"<br>"+"ceil value: "+Math.ceil(user));

//TASK 2
// var user=-prompt("Enter Value");
// //a,b,c,d
// document.write("number: "+user+"<br>"+
// "round off value: "+Math.round(user) +"<br>"+" floor value: "+Math.floor(user) +"<br>"+"ceil value: "+Math.ceil(user));

//TASK 3

// var user=4;
// document.write("The absolute value of -4 is: "+Math.abs(user));

//TASK 4
// var rand=Math.floor(Math.random() * 7) + 1;
// document.write("random dice value: "+rand);

//TASK 5
// var user=Math.floor(Math.random() * 101) + 1;
// document.write("random number between 1 to 100: "+user);


//TASK 6

// var user=prompt("Enter you weight in kilograms");
// if (user=="50" || user=="50kgs" || user=="50kilograms"){
//     document.write("The weight of user is: "+user+" kilograms");
// }

//TASk 8

// var user=+prompt("Enter a number between 1 to 10");
// var rand=Math.floor(Math.random() * 11) + 1;
// if (user==rand){
//     alert("Congratulations!!!");
// }
// else{
//     alert("Try again!");
// }

//CHAPTER 31-14

//TASK 1
// var user=new Date();
// document.write(user);

//TASK 2

// var user=new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// document.write("Current month: "+month[user.getMonth()]);


//TASK 3
// var user = new Date();
// var day = new Array(7);
// day[0] = "Sun";
// day[1] = "Mon";
// day[2] = "Tue";
// day[3] = "Wed";
// day[4] = "Thu";
// day[5] = "Fri";
// day[6] = "Sat";

// var n = day[user.getDay()];
// alert("Today is "+n);

//TASk 4

// var user = new Date();
// var day = new Array(7);
// day[0] = "Sun";
// day[1] = "Mon";
// day[2] = "Tue";
// day[3] = "Wed";
// day[4] = "Thu";
// day[5] = "Fri";
// day[6] = "Sat";

// var n = day[user.getDay()];
// if (n=="Sun" || n=="Sat"){
//     document.write("Its fun day")
// }


//TASK 5

// var user=new Date();
// var n= user.getDate();

// if (n>=16){
//     document.write("Last days of a month")
// }
// else if (n<=15){
//     document.write("First fifteen days of a month")
// }

//CHAPTER 35-38

//TASK 1
// function current(){
//     var user=new Date();
//     document.write(user);
// }

// current();

//TASK 2
// function greeting(){
//     var first=prompt("Enter first name: ")
//     var last=prompt("Enter last name: ")
//     document.write("Welcome "+first+" "+last);
// }
// greeting();

//TASK 3

// function add(x,y){
//     var res=x+y
//     document.write(res);
// }
// add(3,2);

//TASK 5

// function square(x){
//     var res=Math.pow(x, 2);
//     document.write(res);
// }
// square(3);


//TASK 6
// function Factorial(n) { 
//     var ans=1; 
      
//     for (var i = 2; i <= n; i++) 
//         ans = ans * i; 
//     document.write(ans); 
// }
// Factorial(3); 



