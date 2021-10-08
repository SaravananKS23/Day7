//1. Create XHR object/constructor
var request=new XMLHttpRequest();
//2. Open a connection
request.open("GET","https://restcountries.com/v2/all",true);
//3. Initiate the connection
request.send();
//4. Once the data loaded from the server successfully
request.onload=function(){
//Here we are converting "string" to array of object json
var result=JSON.parse(request.response); 
var regions = result.forEach((ele)=> console.log("Name:    "+ele.name+"\nCapital: "+ele.capital+"\nFlag:    "+ele.flag));
}