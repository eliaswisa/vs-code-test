// var x={
//   "Flow": 1,
//   "DelayedJumpNode": "",
//   "DelayedRedisplayNode": null,
//   "LastAddedUnremovedDelayTaskTime": null,
//   "LastUserInputTime": "2022-01-03T15:45:09.8506904Z",
//   "DelayedEntranceNode": "",
//   "DelayedEntranceNodeEntryType": 0,
//   "CurrentScriptId": 14175,
//   "CurrentNodeAddress": "14175:n_52",
//   "History": [
//     "14175:node_0"
//   ],
//   "Data": {
//     "_script": {
//       "supporthtmlmessage": "1",
//       "buttonscompatible": "1"
//     },
//     "data": {
//       "consts": {
        
//       },
//       "clalitonline": {
//         "?xml": {
//           "@version": "1.0",
//           "@encoding": "utf-8"
//         },
//         "s:envelope": {
//           "@xmlns:s": "http://schemas.xmlsoap.org/soap/envelope/",
//           "s:body": {
//             "clalitrunresponse": {
//               "@xmlns": "http://www.clalit.org.il/onlinesuppliers/1.0",
//               "clalitrunresult": {
//                 "@xmlns:i": "http://www.w3.org/2001/xmlschema-instance",
//                 "messageheader": {
//                   "@xmlns:a": "http://www.clalit.org.il/infrastructure/1.0",
//                   "a:requestid": "testclalutsuppliers",
//                   "a:requestdatetime": "2021-08-24T11:18:52.2401061+00:00",
//                   "a:requestingapplication": "71",
//                   "a:servingapplication": "71",
//                   "a:requestingsite": "71",
//                   "a:servingsite": "71",
//                   "a:processid": {
//                     "@i:nil": "true"
//                   },
//                   "a:processparentid": {
//                     "@i:nil": "true"
//                   }
//                 },
//                 "statuscode": "0",
//                 "statusdescription": "Success",
//                 "results": {
//                   "lastname": "טימושצ'נקו",
//                   "firstname": "אלה",
//                   "age": "55",
//                   "districtcode": "9",
//                   "districtname": "הדרום",
//                   "insurancejoiningdate": "2013-02-17T00:00:00",
//                   "mushlam": "כ",
//                   "eligible": "כ",
//                   "eligibilitycode": "1",
//                   "areacodetelephone": "52",
//                   "telephoneno": "8088021",
//                   "addareacodetelephone": "0",
//                   "addtelephoneno": "0",
//                   "emailaddress": null,
//                   "cliniccode": "5733"
//                 }
//               }
//             }
//           }
//         },
//         "headers": {
//           "x-backside-transport": "OK OK",
//           "connection": "close",
//           "transfer-encoding": "chunked",
//           "x-global-transaction-id": "a8c9433961d31a067edbc9fd",
//           "cache-control": "private",
//           "content-type": "text/xml",
//           "date": "Mon, 03 Jan 2022 15:45:10 GMT",
//           "server": "Microsoft-IIS/7.5",
//           "x-aspnet-version": "4.0.30319",
//           "x-powered-by": "ASP.NET"
//         }
//       }
//     }
//   },
//   "DebuggerScriptId": 0,
//   "DebuggerScriptIdVersion": 0,
//   "StreamId": 14179,
//   "SubstreamId": 0
// }


// var syso=data.Data.clalitonline.;
// console.log(syso);

var x={
	"data": {
		"consts": {

		},
		"clalitonline": {
			"?xml": {
				"@version": "1.0",
				"@encoding": "utf-8"
			},
			"s:envelope": {
				"@xmlns:s": "http://schemas.xmlsoap.org/soap/envelope/",
				"s:body": {
					"clalitrunresponse": {
						"@xmlns": "http://www.clalit.org.il/onlinesuppliers/1.0",
						"clalitrunresult": {
							"@xmlns:i": "http://www.w3.org/2001/xmlschema-instance",
							"messageheader": {
								"@xmlns:a": "http://www.clalit.org.il/infrastructure/1.0",
								"a:requestid": "testclalutsuppliers",
								"a:requestdatetime": "2021-08-24T11:18:52.2401061+00:00",
								"a:requestingapplication": "71",
								"a:servingapplication": "71",
								"a:requestingsite": "71",
								"a:servingsite": "71",
								"a:processid": {
									"@i:nil": "true"
								},
								"a:processparentid": {
									"@i:nil": "true"
								}
							},
							"statuscode": "0",
							"statusdescription": "Success",
							"results": {
								"lastname": "טימושצ'נקו",
								"firstname": "אלה",
								"age": "55",
								"districtcode": "9",
								"districtname": "הדרום",
								"insurancejoiningdate": "2013-02-17T00:00:00",
								"mushlam": "כ",
								"eligible": "כ",
								"eligibilitycode": "1",
								"areacodetelephone": "52",
								"telephoneno": "8088021",
								"addareacodetelephone": "0",
								"addtelephoneno": "0",
								"emailaddress": null,
								"cliniccode": "5733"
							}
						}
					}
				}
			},
			"headers": {
				"x-backside-transport": "OK OK",
				"connection": "close",
				"transfer-encoding": "chunked",
				"x-global-transaction-id": "a8c9433961d31a067edbc9fd",
				"cache-control": "private",
				"content-type": "text/xml",
				"date": "Mon, 03 Jan 2022 15:45:10 GMT",
				"server": "Microsoft-IIS/7.5",
				"x-aspnet-version": "4.0.30319",
				"x-powered-by": "ASP.NET"
			}
		}
	}
}

// var temp=x.data.clalitonline["s:envelope"]["s:body"].clalitrunresponse.clalitrunresult.results.cliniccode;
var temp=x.data.clalitonline;
var respon=temp["s:envelope"]["s:body"].clalitrunresponse.clalitrunresult.results.cliniccode;

console.log(respon);