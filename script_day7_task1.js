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
var regions = result.filter((ele)=> ele.region === "Asia");
let output=regions.filter(fin => console.log(fin.name));
console.log(output);
}