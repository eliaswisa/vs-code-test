function demog_func(id_n) {

    var id_arr = [999999022,999999105,999999014,999999980,999999212,999999287,999999113];

    if(id_n==999999022){return 5848};
    if(id_n==999999105){return 5464};
    if(id_n==999999014){return 5279};
    if(id_n==999999980){return 5574};
    if(id_n==999999212){return 5677};
    if(id_n==999999287){return 7109};
    if(id_n==999999113){return 00000};
return -1;

    // var dept_code_arr = [5848,5464,5279,5574,5677,7109,00000];
    // fun_ans = id_arr.indexOf(id_n);
    // if (fun_ans == -1) { return fun_ans; }
    return dept_code_arr[fun_ans];
    
    }
    var id_inp = {{data.id}};
    
    var ans = demog_func(id_inp);
    return ans

    //////////////////////////////////////////////

    function is_existing (pilot_list, user_clinic_dept) {
        let flag=false;
        for (let i = 0; i < pilot_list.length; i++) {
        if(pilot_list[i].value==user_clinic_dept) {flag=true;break}
    }
            return flag;
    }
      
    var responsed_clinic={{data.d_code}};  
    var pilot_li={{data.pilot_clinics}};
    var answer=is_existing(pilot_li,responsed_clinic);
    return answer;