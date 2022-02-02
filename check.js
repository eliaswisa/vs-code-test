function reception_hours_summary(json_object) {


  var reception_hours_obj=json_object.receptionhours.receptionhours.dayinfo;
  var finat_str="";
  var temp_reception_ob="";
 
  for (var i = 0; i <= reception_hours_obj.length-1; i++) {
    finat_str=finat_str+(reception_hours_obj[i].day)+" : ";
   
    temp_reception_ob=reception_hours_obj[i].reception;
     if(!temp_reception_ob.hasOwnProperty('openinghour')){
    for (var j = 0; j < temp_reception_ob.length; j++) {
      finat_str=finat_str+temp_reception_ob[j].closinghour+" - "+temp_reception_ob[j].openinghour+"\n"
      if(temp_reception_ob[j].hasOwnProperty("remark")){finat_str=finat_str+temp_reception_ob[j].remark.text+"\n";}
    }
    }else{ {
      finat_str=finat_str+temp_reception_ob.closinghour+" - "+temp_reception_ob.openinghour+"\n"
      if(temp_reception_ob.hasOwnProperty("remark")){finat_str=finat_str+temp_reception_ob.remark.text+"\n";}
    }
    }
  }
  return finat_str;  
}



var inp = {{data.service_book_res}};
var ans = reception_hours_summary(inp);
return ans;