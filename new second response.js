var ws=[
        {
        "status": 0,
        "deptCode": "8949",
        "isOpen": true,
        "receptionHours": {
          "ReceptionHours": {
            "DayInfo": [
              {
                "Day": "א",
                "DayCode": "1",
                "Reception": {
                  "OpeningHour": "08:00",
                  "ClosingHour": "15:00"
                }
              },
              {
                "Day": "ב",
                "DayCode": "2",
                "Reception": {
                  "OpeningHour": "08:00",
                  "ClosingHour": "20:00"
                }
              },
              {
                "Day": "ג",
                "DayCode": "3",
                "Reception": {
                  "OpeningHour": "08:00",
                  "ClosingHour": "19:00"
                }
              },
              {
                "Day": "ד",
                "DayCode": "4",
                "Reception": {
                  "OpeningHour": "08:00",
                  "ClosingHour": "20:00"
                }
              },
              {
                "Day": "ה",
                "DayCode": "5",
                "Reception": [
                  {
                    "OpeningHour": "08:00",
                    "ClosingHour": "12:00"
                  },
                  {
                    "OpeningHour": "13:00",
                    "ClosingHour": "19:00"
                  }
                ]
              },
              {
                "Day": "ו",
                "DayCode": "6",
                "Reception": {
                  "OpeningHour": "08:00",
                  "ClosingHour": "12:00"
                }
              }
            ]
          }
        },
        "labReceptionHours": {
          "ReceptionHours": {
            "DayInfo": [
              {
                "Day": "א",
                "DayCode": "1",
                "Reception": {
                  "OpeningHour": "07:00",
                  "ClosingHour": "08:45"
                }
              },
              {
                "Day": "ב",
                "DayCode": "2",
                "Reception": {
                  "OpeningHour": "07:00",
                  "ClosingHour": "08:45"
                }
              },
              {
                "Day": "ג",
                "DayCode": "3",
                "Reception": {
                  "OpeningHour": "07:00",
                  "ClosingHour": "08:45"
                }
              },
              {
                "Day": "ד",
                "DayCode": "4",
                "Reception": {
                  "OpeningHour": "07:00",
                  "ClosingHour": "08:45"
                }
              },
              {
                "Day": "ה",
                "DayCode": "5",
                "Reception": {
                  "OpeningHour": "07:00",
                  "ClosingHour": "08:45"
                }
              }
            ]
          }
        },
        "nursesReceptionHours": {
          "ReceptionHours": {
            "DayInfo": [
              {
                "Day": "א",
                "DayCode": "1",
                "Reception": {
                  "OpeningHour": "10:00",
                  "ClosingHour": "14:30"
                }
              },
              {
                "Day": "ב",
                "DayCode": "2",
                "Reception": {
                  "OpeningHour": "10:00",
                  "ClosingHour": "18:30"
                }
              },
              {
                "Day": "ג",
                "DayCode": "3",
                "Reception": [
                  {
                    "OpeningHour": "10:00",
                    "ClosingHour": "14:30"
                  },
                  {
                    "OpeningHour": "16:00",
                    "ClosingHour": "18:30"
                  }
                ]
              },
              {
                "Day": "ד",
                "DayCode": "4",
                "Reception": {
                  "OpeningHour": "10:00",
                  "ClosingHour": "18:30"
                }
              },
              {
                "Day": "ה",
                "DayCode": "5",
                "Reception": [
                  {
                    "OpeningHour": "10:00",
                    "ClosingHour": "12:00"
                  },
                  {
                    "OpeningHour": "13:00",
                    "ClosingHour": "18:30"
                  }
                ]
              },
              {
                "Day": "ו",
                "DayCode": "6",
                "Reception": {
                  "OpeningHour": "08:00",
                  "ClosingHour": "12:00"
                }
              }
            ]
          }
        },
        "deptName": "חב\"ד סיטי - מרפאה ראשונית - כפר חב\"ד",
        "streetHouse": "",
        "cityName": "כפר חב\"ד",
        "phones": {
          "Phones": {
            "Phone": [
              {
                "Type": "טלפון",
                "Prefix": "03",
                "Number": "9602400",
                "Order": "1",
                "UpdateDate": "2020-08-04T12:38:00",
                "Remark": ""
              },
              {
                "Type": "פקס",
                "Prefix": "03",
                "Number": "9602410",
                "Order": "1",
                "UpdateDate": "2020-08-04T12:38:00",
                "Remark": ""
              }
            ]
          }
        },
        "dayCode": "5",
        "sectorCode": "2"
      }
    ]
  ;
//   var reception_hours_obj
//   =ws[0].receptionHours.ReceptionHours.DayInfo;
//   var ws_length=Object.keys(reception_hours_obj
    // ).length; //finds the amount of days.
//   
// var hours_summary;
function hours_summary_fun(json_ob) {
    var reception_hours_obj=json_ob[0].receptionHours.ReceptionHours.DayInfo;
    var finat_str="";
    var ws_length=Object.keys(reception_hours_obj
        ).length; //finds the amount of days.
        // console.log(ws_length + " thisssssssssssss");
    Object.keys(reception_hours_obj).forEach(key => 
    {finat_str=finat_str+(reception_hours_obj[key].Day);}
    
    );
    
    return finat_str;   
  }

  console.log(hours_summary_fun(ws));
  