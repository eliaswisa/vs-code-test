res={
    "status": 0,
    "deptCode": "5324",
    "isOpen": true,
    "receptionHours": "<ReceptionHours><DayInfo><Day>א</Day><DayCode>1</DayCode><Reception><OpeningHour>08:00</OpeningHour><ClosingHour>13:00</ClosingHour></Reception><Reception><OpeningHour>16:00</OpeningHour><ClosingHour>19:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ב</Day><DayCode>2</DayCode><Reception><OpeningHour>08:00</OpeningHour><ClosingHour>12:30</ClosingHour></Reception></DayInfo><DayInfo><Day>ג</Day><DayCode>3</DayCode><Reception><OpeningHour>08:00</OpeningHour><ClosingHour>13:00</ClosingHour></Reception><Reception><OpeningHour>16:00</OpeningHour><ClosingHour>19:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ד</Day><DayCode>4</DayCode><Reception><OpeningHour>08:00</OpeningHour><ClosingHour>13:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ה</Day><DayCode>5</DayCode><Reception><OpeningHour>08:00</OpeningHour><ClosingHour>13:00</ClosingHour></Reception><Reception><OpeningHour>16:00</OpeningHour><ClosingHour>19:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ו</Day><DayCode>6</DayCode><Reception><OpeningHour>08:00</OpeningHour><ClosingHour>12:00</ClosingHour></Reception></DayInfo></ReceptionHours>",
    "labReceptionHours": "<ReceptionHours><DayInfo><Day>א</Day><DayCode>1</DayCode><Reception><OpeningHour>07:00</OpeningHour><ClosingHour>09:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ב</Day><DayCode>2</DayCode><Reception><OpeningHour>07:00</OpeningHour><ClosingHour>09:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ג</Day><DayCode>3</DayCode><Reception><OpeningHour>07:00</OpeningHour><ClosingHour>09:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ד</Day><DayCode>4</DayCode><Reception><OpeningHour>07:00</OpeningHour><ClosingHour>09:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ה</Day><DayCode>5</DayCode><Reception><OpeningHour>07:00</OpeningHour><ClosingHour>09:00</ClosingHour></Reception></DayInfo></ReceptionHours>",
    "nursesReceptionHours": "<ReceptionHours><DayInfo><Day>א</Day><DayCode>1</DayCode><Reception><OpeningHour>09:00</OpeningHour><ClosingHour>13:00</ClosingHour></Reception><Reception><OpeningHour>16:00</OpeningHour><ClosingHour>19:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ב</Day><DayCode>2</DayCode><Reception><OpeningHour>09:00</OpeningHour><ClosingHour>13:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ג</Day><DayCode>3</DayCode><Reception><OpeningHour>09:00</OpeningHour><ClosingHour>13:00</ClosingHour></Reception><Reception><OpeningHour>16:00</OpeningHour><ClosingHour>19:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ד</Day><DayCode>4</DayCode><Reception><OpeningHour>09:00</OpeningHour><ClosingHour>14:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ה</Day><DayCode>5</DayCode><Reception><OpeningHour>09:00</OpeningHour><ClosingHour>13:00</ClosingHour></Reception><Reception><OpeningHour>16:00</OpeningHour><ClosingHour>19:00</ClosingHour></Reception></DayInfo><DayInfo><Day>ו</Day><DayCode>6</DayCode><Reception><OpeningHour>08:00</OpeningHour><ClosingHour>12:00</ClosingHour></Reception></DayInfo></ReceptionHours>",
    "deptName": "מוריה - רמת השרון",
    "streetHouse": "מוריה 31",
    "cityName": "רמת השרון",
    "phones": "<Phones><Phone><Type>טלפון</Type><Prefix>03</Prefix><Number>7607222</Number><Order>1</Order><UpdateDate>2021-01-27T08:22:00</UpdateDate><Remark></Remark></Phone><Phone><Type>פקס</Type><Prefix>09</Prefix><Number>7600770</Number><Order>1</Order><UpdateDate>2021-01-27T08:22:00</UpdateDate><Remark></Remark></Phone></Phones>",
    "dayCode": "5",
    "sectorCode": "1"
}

// function get_full_num(str) {
//     let startindex=str.indexOf("<Prefix>")+8;
//     let endindex=str.indexOf("</Prefix>");
//     let prefix=str.substring(startindex,endindex);
//     return prefix
//   }
// var print=get_full_num(res.phones);
// console.log(print);
// var b=res.phones;
//console.log(b);
//console.log(b);
// let b=res.phone;
function get_full_num(str) {
    //-------prefix
        let startindex=str.indexOf("<Prefix>")+8;
        let endindex=str.indexOf("</Prefix>");
        let prefix=str.substring(startindex,endindex);
    //-------number
    let startindex2=str.indexOf("<Number>")+8;
        let endindex2=str.indexOf("</Number>");
        let number=str.substring(startindex2,endindex2);
        return prefix + "-" + number
      }
      
      
          var print=get_full_num(res.phones);
        var print=get_full_num(res.phones);
        console.log(print);
//----------------------------------------------

function phax(str) {
    //-------slicing
    let slicing_index=str.indexOf("פקס");
    let new_str=str.slice(slicing_index);
    //------------------------------------------------

        let startindex=new_str.indexOf("<Prefix>")+8;
        let endindex=new_str.indexOf("</Prefix>");
        let prefix=new_str.substring(startindex,endindex);
    //-------number
    let startindex2=new_str.indexOf("<Number>")+8;
        let endindex2=new_str.indexOf("</Number>");
        let number=new_str.substring(startindex2,endindex2);
        return prefix + "-" + number
      }
        console.log(phax(res.phones))
// let str = 'Winter is coming';

// console.log(test);
// let position = b.indexOf('Prefix');
// var splitted = b.split('Prefix');
// console.log(splitted);


// let prefix=b.slice(position,position+)
//console.log(b[position]);


