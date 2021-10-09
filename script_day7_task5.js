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
//var currency = result.filter(element=> console.log(element.currencies));
var currency = result.filter(ele=>
    
    {
        try{
            if (ele.currencies === undefined)
        {
            throw new Error("No currency for");
        }
        if ((ele.currencies[0].code==="USD")===true)
        {
            console.log(ele.name+": "+ele.currencies[0].code);
        }
        if ((ele.currencies[1].code==="USD")===true)
        {
            console.log(ele.name+": "+ele.currencies[1].code);
        }
        }catch(e){
        }
    })
}
