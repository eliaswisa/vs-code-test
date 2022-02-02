var service_book_city_name = "תל אביב";
var service_book_address = "ארלוזורוב 32";
function addresses_printer(s1, s2) {
  
var ans="כתובת: ";
var empty_str="";

//first case-no address and no city then return enpty str

if((s1 == ""||s1==null)&&(s2  == ""||s2 ==null))
{return empty_str;}

//second case

if((s1 == ""||s1==null)&&(s2  != ""||s2 !=null))
{return ans + s2 ;}

//3rd case

return ans+s1 +","+" "+s2 +".";}
  
console.log(addresses_printer(service_book_address,service_book_city_name));