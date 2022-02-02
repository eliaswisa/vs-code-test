var first_res={

    "code": 200,
    "ngcom": "xsip-172-17-46-32zk",
    "transaction_id": "71f32288-06de-454f-b7d8-a1f91f29e1f4",
    "server_time": "12/7/2021, 11:03:34 AM GMT+2",
    "data": {
      "success": true,
      "message": "to add product send term/barcode",
      "code": 200,
      "membertype": "user",
      "membertoken": "307919fa-9cab-4d10-b87f-57255ac65af2",
      "membername": "test1",
      "sharelinks": [
        {
          "text": "קישור לשיתוף רשימת הקניה והעגלה עם אנשי הקשר שלך:",
          "sharelink": "https://api.whatsapp.com/send?phone=972506002000&text=~QUIK~d4f4dc04-cbcc-413b-a83c-0a95c136e9d5~"
        }
      ],
      "sharedmembers": [
        {
          "membername": "michael",
          "membertoken": "307919fa-9cab-4d10-b87f-57255ac65af2"
        }
      ]
    },
    "error": {}
  
};
var v="QUIK|d4f4dc04-cbcc-413b-a83c-0a95c136e9d5|";
var b=v.slice(5,41);
console.log(b)